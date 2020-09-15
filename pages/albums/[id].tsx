import LayoutDefault from './../../layouts/LayoutDefault'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setEntriesFavorite } from './../../store/actions/favorite'
import { actionMethod, FETCH_DETAIL, setEntries } from './../../store/actions/albums'
import { LOCAL_DATA } from './../../store/actions/favorite'

declare let window: any
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

  componentDidMount () {
    this.setState({
      isLoading: false
    })

    const localData = JSON.parse(window.localStorage.getItem(LOCAL_DATA)) || []

    console.info('ssss : ', localData)

    this.props.setEntriesFavorite(localData)
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

  handlerFavorite (item: any) {
    const favorite = this.props.entriesFavorite

    favorite.push(item)

    this.props.setEntriesFavorite([])
    this.props.setEntriesFavorite(favorite)

    window.localStorage.setItem(LOCAL_DATA, JSON.stringify(favorite))

    window.alert('favorite')
  }

  handlerUnfavorite (item: any) {
    const favorite = this.props.entriesFavorite
    const favoriteIndex = favorite.findIndex((itemFavorite: any) => itemFavorite.id === item.id)

    favorite.splice(favoriteIndex, 1)

    this.props.setEntriesFavorite([])
    this.props.setEntriesFavorite(favorite)

    window.localStorage.setItem(LOCAL_DATA, JSON.stringify(favorite))

    window.alert('unfavorite')
  }

  isFavorite (item: any) {
    return this.props.entriesFavorite.filter((itemFav: any) => itemFav.id === item.id).length > 0
  }

  render () {
    return (
      <LayoutDefault title={`${this.entries?.title} | Photo Album`}>
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
                      <button className="btn btn-primary" onClick={ () => { this.isFavorite(item) ? this.handlerUnfavorite(item) : this.handlerFavorite(item) } }>{ this.isFavorite(item) ? 'Unlove' : 'Love' }</button>
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
  entriesAlbum: state.albums.entries,
  entriesFavorite: state.favorite.entries
})

const mapDispatchToProps = {
  setEntries: setEntries,
  setEntriesFavorite: setEntriesFavorite
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumsDetailPage)
