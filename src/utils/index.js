/* eslint-disable camelcase */
const mapDBToModel = ({
  id,
  name,
  title,
  year,
  genre,
  performer,
  duration,
}) => ({
  id,
  name,
  title,
  year,
  genre,
  performer,
  duration,
});

const mapAlbumDBToModel = ({
  id,
  name,
  year,
}) => ({
  id,
  name,
  year,
});

module.exports = { mapDBToModel, mapAlbumDBToModel };
