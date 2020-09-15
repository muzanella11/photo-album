import LayoutDefault from './../../layouts/LayoutDefault'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setCounter, decrementCounter, incrementCounter } from './../../store/actions/counter'
import { actionMethod, FETCH_DETAIL, setEntries } from './../../store/actions/albums'

class AlbumsDetailPage extends Component<any, any> {
  state = {
    isLoading: true,
    filters: {
      key: ''
    }
  }

  constructor(props: any) {
    super(props)

    if (process.browser) {
      const id = window.location.pathname.split('/')[2]
      
      actionMethod[FETCH_DETAIL](id)
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
    return this.props?.entriesAlbum[0]
  }

  get entriesPhotos () {
    return this.entries?.photos || []
  }

  thumbnailCard (context: any) {
    return context?.url
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
          <div className="row mb-4 mt-4">
            <div className="col-lg-12">
              <h3>
                { this.entries?.title }
              </h3>
            </div>
          </div>

          <div className="row mb-4 mt-4">
            { 
              this.entriesPhotos.length > 0 ? 
              this.entriesPhotos.map((item: any, index: any) => (
                <div key={index} className="col-lg-3 mb-4">
                  <div className="card">
                    <img className="card-img-top" src={this.thumbnailCard(item)} alt={item.title} />
                    <div className="card-body">
                      <h5 className="card-title">{ item.title }</h5>
                      <a href="#" className="btn btn-primary">Love</a>
                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(AlbumsDetailPage)
