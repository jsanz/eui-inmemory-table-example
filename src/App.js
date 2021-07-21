import '@elastic/eui/dist/eui_theme_amsterdam_light.css';
import {
  EuiPage,
  EuiPageContent,
  EuiPageBody,
  EuiPageContentBody,
  EuiInMemoryTable,
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
    pageSize: 7,
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
                <EuiInMemoryTable
                  items={rows}
                  columns={columns}
                  pagination={pagination}
                  sorting={sorting}
                />
            </EuiPageContentBody>
          </EuiPageContent>
        </EuiPageBody>
      </EuiPage>
    </div>
  );
}

export default App;
