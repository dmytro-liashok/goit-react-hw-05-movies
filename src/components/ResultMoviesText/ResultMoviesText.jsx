import { useSearchParams } from 'react-router-dom';

export default function ResultMoviesText() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const resultStyles = {
    textAlign: 'center',
    padding: '20px',
    fontSize: '18px',
    lineHeight: '1.5',
    letterSpacing: '0.02em',
    fontWeight: '600',
  };
  return <p style={resultStyles}>Search result for query: {query}</p>;
}
