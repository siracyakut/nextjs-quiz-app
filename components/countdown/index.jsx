import PropTypes from "prop-types";

export default function Countdown({ count }) {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex items-center justify-center text-4xl font-bold w-32 h-32 rounded-full bg-blue-300">
        {count}
      </div>
    </div>
  );
}

Countdown.propTypes = {
  count: PropTypes.number.isRequired,
};
