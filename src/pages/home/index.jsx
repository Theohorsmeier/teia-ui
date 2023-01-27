// TODO (mel & xat) - best way to handle filter composition?
// import { useEffect, useState } from 'react'
import React from 'react'
import { Page } from '@atoms/layout'
import {
  Routes,
  Route,
  // NavLink,
  // createSearchParams,
  // useNavigate,
  // useSearchParams,
} from 'react-router-dom'
// import { Input } from '@atoms/input'

// import SubjktsSearchResults from './subjkts-search-results'
import RecentSalesFeed from './feeds/recent-sales-feed'
import NewObjktsFeed from './feeds/new-objkts-feed'
import { PakistanFeed, IranFeed, UkraineFeed } from './feeds/fund-feeds'
import RandomFeed from './feeds/random-feed'
import {
  GlbFeed,
  VideoFeed,
  HtmlSvgFeed,
  GifFeed,
  ImageFeed,
  AudioFeed,
} from './feeds/mime-type-feed'
import TagFeed from './feeds/tag-feed'
import SearchFeed from './feeds/search-feed'
import { FriendsFeed } from './feeds/friends-feed'

// import styles from '@style'

// function FilterLink({ children, to }) {
//   return (
//     <NavLink
//       style={({ isActive }) =>
//         isActive
//           ? {
//               textDecoration: 'underline',
//             }
//           : undefined
//       }
//       className={styles.tag}
//       to={to}
//     >
//       {children}
//     </NavLink>
//   )
// }

export function Home({ isSearch = false }) {
  // const [searchParams] = useSearchParams()
  // const [searchTerm, setSearchTerm] = useState(searchParams.get('term') || '')
  // const navigate = useNavigate()

  return (
    <Page feed title="Home">
      {/*
      <Container>
       <Input
          type="text"
          name="search"
          onChange={(ev) => {
            setSearchTerm(ev.target.value)
          }}
          placeholder="Search ↵"
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              navigate(
                {
                  pathname: '/search',
                  search: createSearchParams({
                    term: searchTerm,
                  }).toString(),
                },
                { replace: true }
              )
            }
          }}
          value={searchTerm}
        /> */}
      {/* <div style={{ marginTop: '15px' }}>
          <div>
            <FilterLink to="/feed/iran">🇮🇷 iran</FilterLink>
            <FilterLink to="/feed/pakistan">🇵🇰 pakistan</FilterLink>
            <FilterLink to="/feed/ukraine">🇺🇦 ukraine</FilterLink>
            <FilterLink to="/feed/tezospride">🏳️‍🌈 tezospride</FilterLink>
          </div>
          <div>
            <FilterLink to="/feed/random">random</FilterLink>
            <FilterLink to="/feed/glb">glb</FilterLink>
            <FilterLink to="/feed/music">music</FilterLink>
            <FilterLink to="/feed/video">video</FilterLink>
            <FilterLink to="/feed/html-svg">html/svg</FilterLink>
            <FilterLink to="/feed/gif">gif</FilterLink>
            <FilterLink to="/feed/newobjkts">new OBJKTs</FilterLink>
            <FilterLink to="/">recent sales</FilterLink>
          </div>
        </div>
        {isSearch ? <SubjktsSearchResults /> : null}
      </Container>
       */}
      {isSearch ? (
        <SearchFeed />
      ) : (
        <Routes>
          <Route index element={<RecentSalesFeed />} />
          <Route
            path="/tezospride"
            element={<TagFeed tag="tezospride" namespace="tezospride" />}
          />
          <Route path="/iran" element={<IranFeed />} />
          <Route path="/pakistan" element={<PakistanFeed />} />
          <Route path="/ukraine" element={<UkraineFeed />} />
          <Route path="/random" element={<RandomFeed />} />
          <Route path="/newobjkts" element={<NewObjktsFeed />} />
          <Route path="/glb" element={<GlbFeed />} />
          <Route path="/video" element={<VideoFeed />} />
          <Route path="/image" element={<ImageFeed />} />
          <Route path="/audio" element={<AudioFeed />} />
          <Route path="/html-svg" element={<HtmlSvgFeed />} />
          <Route path="/gif" element={<GifFeed />} />
          <Route path="/friends/:address" element={<FriendsFeed />} />
        </Routes>
      )}
    </Page>
  )
}