import { ButtonChangePage, ButtonList } from './ButtonsChangePage. styled';
import PropTypes from 'prop-types';

export default function ButtonsChangePage({
  onClickChangePage,
  page,
  totalFindPages,
}) {
  return (
    <ButtonList>
      {page !== 1 && (
        <li>
          <ButtonChangePage
            type="button"
            onClick={() => {
              onClickChangePage(-1);
            }}
          >
            Previous page
          </ButtonChangePage>
        </li>
      )}
      {page !== totalFindPages && (
        <li>
          <ButtonChangePage
            type="button"
            onClick={() => {
              onClickChangePage(+1);
            }}
          >
            Next Page
          </ButtonChangePage>
        </li>
      )}
    </ButtonList>
  );
}

ButtonsChangePage.propTypes = {
  onClickChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  totalFindPages: PropTypes.number.isRequired,
};
