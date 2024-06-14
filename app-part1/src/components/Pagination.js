import React from "react";
import styled from "styled-components";


const PageUl = styled.ul`
  float: left;
  list-style: none;
  text-align: center;
  border-radius: 3px;
  color: white;
  padding: 1px;
  border-top: 3px solid #186ead;
  border-bottom: 3px solid #186ead;
  background-color: rgba(0, 0, 0, 0.4);
`;


const PageLi = styled.li`
  display: inline-block;
  font-size: 17px;
  font-weight: 600;
  padding: 5px;
  border-radius: 5px;
  width: 25px;
  &:hover {
    cursor: pointer;
    color: white;
    background-color: #263a6c;
  }
  &:focus::after {
    color: white;
    background-color: #263a6c;
  }
`;


const PageSpan = styled.span`
  &:hover::after,
  &:focus::after {
    border-radius: 100%;
    color: white;
    background-color: #263a6c;
  }
`;


const Pagination = ({ pageInfo, handlePageInfo, keyword }) => {

  return (
    <div>
      <nav style={{ display: 'flex', justifyContent: 'center' }}>
        <PageUl>
          {pageInfo.prev ?
            (<PageLi>
              <PageSpan onClick={() => handlePageInfo({page: Math.min(...pageInfo.pageList)-10, keyword: keyword})}>
                &lt;
              </PageSpan>
            </PageLi>) : (<></>)
          }

          {pageInfo.pageList && pageInfo.pageList.map((pageNumber) => (
            <PageLi key={pageNumber}>
              <PageSpan onClick={() => handlePageInfo({page: pageNumber - 1, keyword: keyword})}>
                {pageNumber}
              </PageSpan>
            </PageLi>
          ))}

          {pageInfo.next ?
           (<PageLi>
            <PageSpan onClick={() => handlePageInfo({page:(Math.max(...pageInfo.pageList)+1), keyword: keyword})}>
              &gt;
            </PageSpan>
          </PageLi>): (<></>)
          }
        </PageUl>
      </nav>
    </div>
  );
};


export default Pagination;


