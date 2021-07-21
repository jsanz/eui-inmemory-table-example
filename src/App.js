import '@elastic/eui/dist/eui_theme_amsterdam_light.css';
import {
  EuiPage,
  EuiPageContent,
  EuiPageBody,
  EuiPageContentBody,
  EuiInMemoryTable,
  EuiText,
  EuiPageHeader,
  EuiSpacer,
  EuiTextAlign,
} from '@elastic/eui';
import { LoremIpsum } from "lorem-ipsum";


const lorem = new LoremIpsum({
  sentencesPerParagraph: { max: 8, min: 4 },
  wordsPerSentence: { max: 16, min: 4 }
});

function App() {

  const rows = Array.from(Array(30).keys()).map(id => {
    return {
      id: id + 1,
      desc: lorem.generateSentences(1)
    }
  });

  const columns = [
    {
      field: 'id',
      name: 'Identifier',
      sortable: true,
      width: '100px'
    },
    {
      field: 'desc',
      name: 'Description',
      truncateText: true,
    }
  ];

  const pagination = {
    initialPageIndex: 0,
    initialPageSize: 7,
    pageSizeOptions: [7, 14, 28]
  };

  const sorting = {
    sort: {
      field: 'id',
      direction: 'desc'
    }
  }

  return (
    <div>
      <EuiPage>
        <EuiPageBody>
          <EuiPageContent>
            <EuiPageContentBody>
              <EuiPageHeader
                pageTitle="EUI In-Memory Table example"
                iconType="logoElastic"
              />
              <EuiSpacer size="l" />
              <EuiInMemoryTable
                items={rows}
                columns={columns}
                pagination={pagination}
                sorting={sorting}
              />
              <EuiSpacer size="l" />
              <EuiText>
                <EuiTextAlign textAlign="right">
                  <p><a href="https://github.com/jsanz/eui-inmemory-table-example/blob/main/src/App.js">Source code</a></p>
                </EuiTextAlign>
              </EuiText>
            </EuiPageContentBody>
          </EuiPageContent>
        </EuiPageBody>
      </EuiPage>
    </div>
  );
}

export default App;
