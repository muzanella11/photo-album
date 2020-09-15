import LayoutDefault from './../layouts/LayoutDefault'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setCounter, decrementCounter, incrementCounter } from './../store/actions/counter'
import { actionMethod, FETCH_ENTRIES, setEntries } from './../store/actions/albums'

class IndexPage extends Component<any, any> {
  state = {
    isLoading: true,
    filters: {
      key: ''
    }
  }

  constructor(props: any) {
    super(props)

    if (process.browser) {
      actionMethod[FETCH_ENTRIES]('')
        .then(response => {
          this.props.setEntries(response)
          this.setState({
            isLoading: false
          })
        })
        .catch(() => {
          this.setState({
            isLoading: false
          })
        })
    }
  }

  get entries () {
    return this.props?.entriesAlbum?.filter((item: any) => this.state.filters.key ? (item.title === this.state.filters.key || item.userDetail.username === this.state.filters.key) : item)
  }

  thumbnailCard (context: any) {
    return context?.photos[0].url
  }

  onSearchChange = (event: any) => {
    this.setState({
      filters: Object.assign(this.state.filters, {
        key: event.target.value
      })
    })
  }

  render () {
    return (
      <LayoutDefault title="Home | Photo Album">
        <div className="l-home container">
          {
            !this.state.isLoading ?
            <div className="row mt-4">
              <div className="col-lg-12">
                <form className="form-inline my-2 my-lg-0">
                  <input 
                    className="form-control mr-sm-2" 
                    type="search" 
                    placeholder="Search" 
                    aria-label="Search" 
                    value={this.state.filters.key}
                    onChange={this.onSearchChange}
                  />
                </form>
              </div>
            </div>
            : ''
          }

          <div className="row mt-4">
            { 
              this.entries.length > 0 ? 
              this.entries.map((item: any, index: any) => (
                <div key={index} className="col-lg-3 mb-4">
                  <div className="card">
                    <a href={`/albums/${item.id}`}>
                      <img className="card-img-top" src={this.thumbnailCard(item)} alt={item.title} />
                      <div className="card-body">
                        <h5 className="card-title">{ item.title }</h5>
                        <div className="row mb-2">
                          <div className="col-lg-12">
                            <a href={`/${item.userDetail.id}`}>
                              <span>{ item.userDetail.username }</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                )
              ) 
              : <div className="col-lg-12">{this.state.isLoading ? 'Loading' : 'No Data'}</div>
            }
          </div>
        </div>
      </LayoutDefault>
    )
  }
}

const mapStateToProps = (state: any) => ({
  counter: state.counter.value,
  entriesAlbum: state.albums.entries
})

const mapDispatchToProps = {
  setCounter: setCounter,
  incrementCounter: incrementCounter,
  decrementCounter: decrementCounter,
  setEntries: setEntries
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)
