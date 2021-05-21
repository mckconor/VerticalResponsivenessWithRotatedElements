import { Container, Row, Spinner } from "react-bootstrap";

export const TestingCol = ({ typeName }) => {
  return (
    <Container fluid className="discovery-container">
      <div
        className={
          `infinite header` + (typeName === "documents" ? ` vertical` : ` `)
        }
      >
        <Row>
          {typeName === "themes" ? (
            <h2
              style={{
                padding: "10px",
                fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
                fontWeight: "bold"
              }}
            >
              Results
            </h2>
          ) : null}

          {typeName === "documents" ? (
            <Row className="vertical-row">
              <div className="col">
                <div className="vertical-document-title">
                  <input type="checkbox" />
                  <div className="vertical-doc-name-image">
                    <div className="vertical-table-header">
                      <div className="vertical-contents">
                        <span title="HCaTS_RFP FINAL.pdf">Short.pdf</span>
                      </div>
                    </div>
                    <div className="document-image-holder">
                      <img
                        alt=""
                        className="img pdf"
                        src="https://www.ap-ps.fr/wp-content/uploads/2019/06/pdf-icon.png"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="vertical-document-title">
                  <input type="checkbox" />
                  <div className="vertical-doc-name-image">
                    <div className="vertical-table-header">
                      <div className="vertical-contents">
                        <span title="HCaTS_RFP FINAL.pdf">
                          Medium length.pdf
                        </span>
                      </div>
                    </div>
                    <div className="document-image-holder">
                      <img
                        alt=""
                        className="img pdf"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/MS_word_DOC_icon_%282003-2007%29.svg/785px-MS_word_DOC_icon_%282003-2007%29.svg.png"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="vertical-document-title">
                  <input type="checkbox" />
                  <div className="vertical-doc-name-image">
                    <div className="vertical-table-header">
                      <div className="vertical-contents">
                        <span title="HCaTS_RFP FINAL.pdf">
                          Long length document title.pdf
                        </span>
                      </div>
                    </div>
                    <div className="document-image-holder">
                      <img
                        alt=""
                        className="img pdf"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/MS_word_DOC_icon_%282003-2007%29.svg/785px-MS_word_DOC_icon_%282003-2007%29.svg.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Row>
          ) : null}

          {typeName === "content" ? (
            <h2
              style={{
                padding: "10px",
                fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
                fontWeight: "bold"
              }}
            >
              Contents
            </h2>
          ) : null}
        </Row>
      </div>
      <div className="infinite body">
        {typeName === "themes" ? (
          <ul className="test-list">
            <li>
              <input type="checkbox" /> test
            </li>
            <li>
              <input type="checkbox" /> test
            </li>
            <li>
              <input type="checkbox" /> test
            </li>
            <li>
              <input type="checkbox" /> test
            </li>
            <li>
              <input type="checkbox" /> test
            </li>
            <li>
              <input type="checkbox" /> test
            </li>
            <li>
              <input type="checkbox" /> test
            </li>
            <li>
              <input type="checkbox" /> test
            </li>
            <li>
              <input type="checkbox" /> test
            </li>
            <li>
              <input type="checkbox" /> test
            </li>
            <li>
              <input type="checkbox" /> test
            </li>
          </ul>
        ) : null}

        {typeName === "documents" ? (
          <ul className="test-list">
            <li>
              <table>
                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                </tr>
              </table>
            </li>
            <li>
              <table>
                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                </tr>
              </table>
            </li>
            <li>
              <table>
                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                </tr>
              </table>
            </li>
            <li>
              <table>
                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                </tr>
              </table>
            </li>
            <li>
              <table>
                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                </tr>
              </table>
            </li>
            <li>
              <table>
                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                </tr>
              </table>
            </li>
            <li>
              <table>
                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                </tr>
              </table>
            </li>
            <li>
              <table>
                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                </tr>
              </table>
            </li>
            <li>
              <table>
                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                </tr>
              </table>
            </li>
            <li>
              <table>
                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                </tr>
              </table>
            </li>
          </ul>
        ) : null}

        {typeName === "content" ? (
          <div className="sample-content">Sample content</div>
        ) : null}
      </div>
    </Container>
  );
};
