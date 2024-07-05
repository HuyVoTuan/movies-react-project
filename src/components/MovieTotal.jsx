import PropTypes from 'prop-types';

export default function MovieTotal({ data }) {
  return (
    <>
      <p className="mb-3 text-2xl text-white">
        Found <span className="inline-block font-bold">{data.length}</span>{' '}
        results
      </p>
    </>
  );
}

MovieTotal.propTypes = {
  data: PropTypes.array.isRequired,
};
