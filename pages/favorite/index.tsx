import LayoutDefault from './../../layouts/LayoutDefault'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setEntriesFavorite } from './../../store/actions/favorite'
import { LOCAL_DATA } from './../../store/actions/favorite'

declare let window: any

class FavoritePage extends Component<any, any> {
  state = {
    isLoading: true
  }

  constructor(props: any) {
    super(props)
  }

  componentDidMount () {
    this.setState({
      isLoading: false
    })

    this.props.setEntriesFavorite(JSON.parse(window.localStorage.getItem(LOCAL_DATA)) || [])
  }

  get entries () {
    return this.props?.entriesFavorite
  }

  thumbnailCard (context: any) {
    return context?.url
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
      <LayoutDefault title="Home | Photo Album">
        <div className="l-home container">
          <div className="row mt-4">
            { 
              this.entries?.length > 0 ? 
              this.entries.map((item: any, index: any) => (
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
  entriesFavorite: state.favorite?.entries
})

const mapDispatchToProps = {
  setEntriesFavorite: setEntriesFavorite
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoritePage)
