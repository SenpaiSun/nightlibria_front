interface Image {
  src: string
  thumbnail: string
  optimized?: {
    src: string
    thumbnail: string
  }
}

interface Genre {
  id: number
  name: string
  image: {
    preview: string
    thumbnail: string
    optimized: {
      preview: string
      thumbnail: string
    }
  }
  total_releases: number
}

interface Name {
  main: string
  english: string
  alternative: string | null
}

interface Type {
  value: string
  description: string
}

interface Season {
  value: string
  description: string
}

interface AgeRating {
  value: string
  label: string
  is_adult: boolean
  description: string
}

interface PublishDay {
  value: number
  description: string
}

interface LatestEpisode {
  id: string
  name: string
  ordinal: number
  opening: {
    stop: number
    start: number
  }
  ending: {
    stop: number
    start: number
  }
  preview: Image
  hls_480: string
  hls_720: string
  hls_1080: string
  duration: number
  rutube_id: string | null
  youtube_id: string | null
  updated_at: string
  sort_order: number
  name_english: string | null
}

export interface lastRealese {
  id: number
  type: Type
  year: number
  name: Name
  alias: string
  season: Season
  poster: Image
  fresh_at: string
  created_at: string
  updated_at: string
  is_ongoing: boolean
  age_rating: AgeRating
  publish_day: PublishDay
  description: string
  notification: string | null
  episodes_total: number
  external_player: string | null
  is_in_production: boolean
  is_blocked_by_geo: boolean
  episodes_are_unknown: boolean
  is_blocked_by_copyrights: boolean
  added_in_users_favorites: number
  average_duration_of_episode: number
  genres: Genre[]
  latest_episode: LatestEpisode
}

export interface lastReleaseProps {
  lastRelease: lastRealese[]
}
