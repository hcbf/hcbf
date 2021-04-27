import React, { useState, useEffect } from "react";
import { connect, styled, css } from "frontity";
import { Container, Row } from "react-bootstrap";
import { Input } from "antd";
import Papa from "papaparse";
import useTableSearch from "./useTableSearch";
import Table from "./Table";

const { Search } = Input;

const DataTable = ({ state }) => {
  const [searchVal, setSearchVal] = useState(null);
  const [searchFilter, setSearchFilter] = useState([]);

  const link = state.source.get(`/acf/${state.theme.grantsPage.id}`).items['grants-dt-content'].url;

  let logos = [];
  useEffect(() => {
    state.theme.grantsPage.granteeLogos.forEach(({ id }, index) => {
      return logos[index] = {title: state.source.attachment[id].title.rendered, url: state.source.attachment[id].source_url}
    });
  }, [])

  const [header, setHeader] = useState([]);
  const [years, setYears] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [categories, setCategories] = useState([]);

  const getData = async () => {
    const response = await fetch(`${link}`);
    const reader = await response.body.getReader();
    const result = await reader.read();
    const decoder = new TextDecoder('utf-8');
    const csv = decoder.decode(result.value);
    const results = Papa.parse(csv, { header: true });
    const { data } = results;

    // Set Year Filter Array
    let yearArray = [];
    results.data.map(user => {
      const userYear = RegExp(`${user.Year}`);
      if (!userYear.test(yearArray)) {
        yearArray.push(user.Year);
      }
    });
    yearArray.sort((a,b) => b - a);
    setYears(yearArray);

    // Set Program Filter Array
    let programArray = [];
    results.data.map(user => {
      const userProgram = RegExp(`${user.Program}`, 'i');
      if (!userProgram.test(programArray)) {
        programArray.push(user.Program);
      }
    });
    programArray.sort();
    setPrograms(programArray);

    // Set Category Filter Array
    let categoryArray = [];
    results.data.map(user => {
      let category = user.Category;
      if (/^.*[,].*$/.test(category)) {
        const userArray = category.trim().split(/\s*,\s*/);
        userArray.map((item) => {
          const userCategory = RegExp(`${item}`, 'i');
          if (!userCategory.test(categoryArray)) {
            categoryArray.push(item);
          }
        })
      } else {
        const userCategory = RegExp(`${category.trim()}`, 'i');
        if (!userCategory.test(categoryArray)) {
          categoryArray.push(category);
        }
      }
    });
    categoryArray.sort();
    setCategories(categoryArray);

    const fields = results.meta.fields;
    let userColumns = [];
    fields.map((item) => {
      const columnData = {
        title: `${item}`,
        dataIndex: `${item}`,
        key: `${item.toLowerCase()}`,
      }
      userColumns.push(columnData);
    })
    setHeader(userColumns);

    return { data };
  }

  const { filteredData, loading } = useTableSearch({ searchVal, searchFilter, retrieve: getData });

  return (
    <Content>

      <FilterFeatures>
        <SearchBar
          onChange = {e => setSearchVal(e.target.value)}
          placeholder = "Search Grants"
          enterButton
        />

        <FilterRow>
          <Dropdown css={css`width: 100px;`} onClick={e => {/visible/.test(e.target.classList.value) ?
              e.target.classList.remove('visible')
              :
              e.target.classList.add('visible')}
            }>
            <NavButton>
              <p>Years</p>
            </NavButton>
            <Hidden>
              {years.map(year => {
                const value = year;
                const re = new RegExp(`${value}`);

                return (
                  <p onClick={() => {
                    (re.test(searchFilter)) ?
                    setSearchFilter(searchFilter.filter(item => item !== value))
                    : setSearchFilter([...searchFilter, value]);
                  }}>
                    { year }
                    { re.test(searchFilter) && <span css={css`position: absolute; right: 15px;`}>&#10003;</span> }
                  </p>
                )
              })}
            </Hidden>
          </Dropdown>

          <Dropdown onClick={e => {/visible/.test(e.target.classList.value) ?
              e.target.classList.remove('visible')
              :
              e.target.classList.add('visible')}
            }>
            <NavButton>
              <p>Grant Programs</p>
            </NavButton>
            <Hidden>
              {programs.map(program => {
                const value = program;
                const re = new RegExp(`${value}`);

                return (
                  <p onClick={() => {
                    (re.test(searchFilter)) ?
                    setSearchFilter(searchFilter.filter(item => item !== value))
                    : setSearchFilter([...searchFilter, value]);
                  }}>
                    { program }
                    { re.test(searchFilter) && <span css={css`position: absolute; right: 15px;`}>&#10003;</span> }
                  </p>
                )
              })}
            </Hidden>
          </Dropdown>

          <Dropdown onClick={e => {/visible/.test(e.target.classList.value) ?
              e.target.classList.remove('visible')
              :
              e.target.classList.add('visible')}
            }>
            <NavButton>
              <p>Categories</p>
            </NavButton>
            <Hidden>
              {categories.map(category => {
                const value = category;
                const re = new RegExp(`${value}`);

                return (
                  <p onClick={() => {
                    (re.test(searchFilter)) ?
                    setSearchFilter(searchFilter.filter(item => item !== value))
                    : setSearchFilter([...searchFilter, value]);
                  }}>
                    { category }
                    { re.test(searchFilter) && <span css={css`position: absolute; right: 15px;`}>&#10003;</span> }
                  </p>
                )
              })}
            </Hidden>
          </Dropdown>
        </FilterRow>
      </FilterFeatures>

      <Table
        dataSource = {filteredData}
        logos = {logos}
        columns = {header}
        rowKey = 'grants-database'
      />

  </Content>
  )
}

export default connect(DataTable);

const Content = styled.div`
  background: #F2F2F2;
  margin-left: -8vw;
  margin-right: -8vw;
`

const FilterFeatures = styled.div`
  background: #FFFFFF;
  padding-left: 8vw;
  padding-right: 8vw;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`

const SearchBar = styled(Search)`
  display: flex;
  flex-direction: row;
  height: 50px;
  background: #1B75BB;
  border-radius: 5px;

  > span {
    position: relative;
    height: inherit;
    width: 100%;
  }

  input {
    background: none;
    color: #FFFFFF;
    height: inherit;
    width: calc(100% - 51px);
    padding: 13px 10px 10px 10px;
    border: 0;
    outline: none;

    ::placeholder {
      color: #FFFFFF;
      opacity: 1;
    }
  }

  span.ant-input-group-addon {
    height: inherit;
    width: 51px;
    float: right;
  }

  button {
    background: none;
    color: #FFFFFF;
    height: inherit;
    width: inherit;
    border: none;
    outline: none;
  }

  svg {
    height: 25px;
    width: 25px;
  }
`

const FilterRow = styled(Row)`
  margin-top: 10px;
  border-bottom: 20px solid #FFFFFF;
`

const Dropdown = styled.div`
  width: 250px;

  p, div {
    margin: 0;
    padding: 0;
    width: inherit;
  }

  p {
    padding-left: 10px;
  }

  :hover {
    cursor: pointer;

    div:first-child {
      background: #1B75BB;
      color: #FFFFFF;
      text-decoration: underline;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }

    div {
      background: #FFFFFF;
      display: block;
    }

    .visible div {
      background: #FFFFFF;
      display: block;
    }
  }
`

const NavButton = styled.div`
  color: #1B75BB;
  border-top-right-radius: 5px;
`

const Hidden = styled.div`
  display: none;
  position: absolute;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  border-radius: 5px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  overflow: hidden;
  z-index: 10;

  p {
    position: relative;
    margin: 0;
    padding: 0;
    padding-left: 10px;

    :hover {
      background: #F2F2F2;
    }
  }
`

const Database = styled(Table)`
  thead {
    display: none;
  }
`
