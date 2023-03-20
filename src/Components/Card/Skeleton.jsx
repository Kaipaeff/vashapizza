import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    className='pizza-block'
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#fafafa"
    foregroundColor="#ecebeb"
  >
    <circle cx="140" cy="125" r="125" />
    <rect x="0" y="320" rx="15" ry="15" width="280" height="88" />
    <rect x="0" y="435" rx="10" ry="10" width="101" height="27" />
    <rect x="130" y="423" rx="25" ry="25" width="150" height="45" />
    <rect x="0" y="275" rx="10" ry="10" width="280" height="27" />
  </ContentLoader>
);

export default Skeleton;
