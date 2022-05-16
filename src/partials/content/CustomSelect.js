import _ from "lodash";
import debounce from "lodash/debounce";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";
import Select from "react-select/async";
import { actions } from "../../store/ducks/search.movie.duck";

const CustomSelect = () => {
  const dispatch = useDispatch();

  const { movie_search } = useSelector(({ movie_search }) => ({
    movie_search,
  }));

  const _loadOptions = (query, callback) => {
    const inputValue = query.replace(/\W/g, "");
    dispatch(
      actions.searchMovieRequest({
        inputValue,
        callback,
      })
    );
  };

  const loadOptions = debounce(_loadOptions, 1000);

  const onChange = (props, a, b) => {
    if (props) {
      dispatch(push(`/detail?id=${props.id}`));
    }
    e.preventDefault();
  };

  const CustomOption = ({ children, innerProps, isDisabled }) => {
    return !isDisabled ? <div {...innerProps}>{children}</div> : null;
  };
  console.log("custom options", CustomOption);
  const LoadingMessage = (props) => {
    return (
      <div
        {...props.innerProps}
        style={props.getStyles("loadingMessage", props)}
      >
        ...
      </div>
    );
  };

  const NoOptionsMessage = () => <div>No result found</div>;

  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: "#0B071E",
      width: 300,
      border: "none",
      boxShadow: state.isFocused ? null : null,
      "&:hover": {
        border: state.isFocused ? "0" : "black",
      },
    }),
    singleValue: (base) => ({
      ...base,
      color: "#fff",
    }),
    input: (base) => ({
      ...base,
      color: "#fff",
    }),
  };
  return (
    <div>
      <Select
        styles={customStyles}
        className="react-select"
        placeholder="Search Movie..."
        closeMenuOnSelect
        loadOptions={loadOptions}
        defaultOptions={
          movie_search.entity
            ? _.map(movie_search.entity.results, (entity) => ({
                id: entity.id,
                label: entity.original_title,
                value: _.kebabCase(entity.original_title),
              }))
            : []
        }
        onChange={onChange}
        components={{
          Option: CustomOption,
          NoOptionsMessage,
          LoadingMessage,
        }}
      />
    </div>
  );
};
export default CustomSelect;
