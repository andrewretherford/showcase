# MVP

## App
- [x] Call Header
- [x] Set up routes for ShowResults, ShowDetails, Episodes, EpisodeDetail, Cast, CastMemberDetail

## Header
 - [x] Add title
 - [x] Create link for home page
 - [x] Create searchString state variable
 - [x] Create search form with controlled input
 - [x] Create change handler to update input state
 - [x] Create submit handler to store input in searchString state OR use Navigate to take user to /results/:searchString
 
 ## ShowResults
 - [ ] Receive searchString in props?
 - [ ] Create useEffect function with a fetch for shows based on searchString
 - [x] Map over the response to call Show for each element and pass showInfo as a prop

 ## Show
 - [x] Receive showInfo in props
 - [x] Display show name, thumbnail, and synopsis
 - [x] Add link to ShowDetails with showID as a search parameter

## ShowDetails
 - [x] Get showID with useParams
 - [ ] Create useEffect function with a fetch to retrieve show details
 - [x] Display full info for the show
 - [x] Add link to Episodes
 - [x] Add link to Cast
 
## Episodes
 - [x] Get showId with useSearchParams
 - [ ] Create useEffect function with a fetch to retrieve all episodes
 - [x] Map over the response to call Episode for each element ~~and pass episodeInfo as a prop~~

## Episode
 - [x] Receive episodeInfo in props
 - [x] Display episode name, thumbnail, and synopsis
 - [x] Add link to EpisodeDetails with episodeID as a search parameter

## EpisodeDetails
 - [ ] Get episodeID with useSearchParams
 - [ ] Create useEffect function with a fetch to retrieve episode details
 - [x] Display full info for the episode

## Cast
 - [ ] Get showId with useSearchParams
 - [ ] Create useEffect function with a fetch to retrieve the cast data
 - [x] Map over the response to call CastMember for each element and pass castInfo as a prop

## CastMember
 - [x] Receive castInfo in props
 - [ ] Display cast member name, thumbnail, and character name
 - [ ] Add link to CastMemberDetails with castMemberID as a search parameter

## CastMemberDetails
 - [ ] Get castMemberID with useSearchParams
 - [ ] Create useEffect function with a fetch to retrieve details for the cast member
 - [ ] Display full info for the cast member

# Stretch Goals
 - [ ] Test bookmarking results in browser
    - [ ] Verify that bookmarked pages can load and pull new API data
 - [ ] Add link to CastMemberDetails that performs a google search for their name with a parameter that specifies IMDB
 - [ ] Add a default search for all shows to the home page on load