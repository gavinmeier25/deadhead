import * as songs from '../../../data/song_refs.json'

export default async  (req, res) => {

    res.status(200).json(songs)
}