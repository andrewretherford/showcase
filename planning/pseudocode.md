# MVP

## App
- [ ] Call Header
- [ ] Create searchString state
- [ ] Set up routes for ShowResults, ShowDetails, Episodes, EpisodeDetail, Cast, CastMemberDetail

## Header
 - [ ] Receive setSearchString in props?
 - [ ] Add title
 - [ ] Create link for home page
 - [ ] Create input state variable
 - [ ] Create search form with controlled input
 - [ ] Create change handler to update input state
 - [ ] Create submit handler to store input in searchString state OR use Navigate to take user to /results/:searchString
 
 ## ShowResults
 - [ ] Receive searchString in props
 - [ ] Create useEffect function with a fetch for shows based on searchString
 - [ ] Map over the response to call Show for each element and pass showInfo as a prop

 ## Show
 - [ ] Receive showInfo in props
 - [ ] Display show name, thumbnail, and synopsis
 - [ ] Add link to ShowDetails with showID as a search parameter

## ShowDetails
 - [ ] Get showID with useSearchParams
 - [ ] Create useEffect function with a fetch to retrieve show details
 - [ ] Display full info for the show
 - [ ] Add link to Episodes
 - [ ] Add link to Cast
 
## Episodes
 - [ ] Get showId with useSearchParams
 - [ ] Create useEffect function with a fetch to retrieve all episodes
 - [ ] Map over the response to call Episode for each element and pass episodeInfo as a prop

## Episode
 - [ ] Receive episodeInfo in props
 - [ ] Display episode name, thumbnail, and synopsis
 - [ ] Add link to EpisodeDetails with episodeID as a search parameter

## EpisodeDetails
 - [ ] Get episodeID with useSearchParams
 - [ ] Create useEffect function with a fetch to retrieve episode details
 - [ ] Display full info for the episode

## Cast
 - [ ] Get showId with useSearchParams
 - [ ] Create useEffect function with a fetch to retrieve the cast data
 - [ ] Map over the response to call CastMember for each element and pass castInfo as a prop

## CastMember
 - [ ] Receive castInfo in props
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