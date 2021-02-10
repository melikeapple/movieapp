import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import _ from 'lodash'
import moment from 'moment'
import { Container, Row, Col, Image } from 'react-bootstrap'
import StarIcon from '@material-ui/icons/Star'

export const DetailHero = () => {
  const { movie_detail } = useSelector(
    ({ movie_detail }) => ({ movie_detail }),
    shallowEqual,
  )
  return (
    <div className="hero-wrapper">
      {movie_detail.entity && (
        <>
          <Image
            className="hero-wrapper-poster"
            src={`https://image.tmdb.org/t/p/original/${movie_detail.entity.backdrop_path}`}
            alt=""
          />
          <Container>
            <Row>
              <Col>
                <div className="hero-desc">
                  <div className="d-flex mb-5 text-sm">
                    <div className="pl-2 font-weight-bold">
                      {moment(movie_detail.entity).format('MMM DD YYYY')}
                    </div>
                    <div className="d-flex text-light ml-5">
                      <StarIcon style={{ fontSize: 18 }} className="mt-1" />
                      <span className="ml-2">
                        {movie_detail.entity.vote_average}
                      </span>
                    </div>
                  </div>
                  <h1 className="py-5 font-weight-bolder">
                    {movie_detail.entity.original_title}
                  </h1>
                  <div className="d-flex font-weight-bold text-xl">
                    {movie_detail.entity.runtime}min |
                    {movie_detail.entity.genres.map((genre, index) => (
                      <div className="px-2 text-light">{genre.name}</div>
                    ))}
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </div>
  )
}
