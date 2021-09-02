import { useState } from 'react';
import TagsInput from './components/TagsInput';
import './App.css';

const App = () => {
  const [tags, setTags] = useState([]);
  const [techSkills, setTechSkills] = useState([
    { id: 1, name: 'Javascript' },
    { id: 2, name: 'PHP' },
    { id: 3, name: 'Java' },
    { id: 4, name: 'Node' },
    { id: 5, name: 'MySQL' },
    { id: 6, name: 'NoSQL' },
    { id: 7, name: 'Go' },
    { id: 8, name: 'React' },
    { id: 9, name: 'Angular' },
    { id: 10, name: 'Vue' },
    { id: 11, name: 'Typescript' }
  ]);
  const [softSkills, setSoftSkills] = useState([
    { id: 1, name: 'Leadership' },
    { id: 2, name: 'Problem solver' },
    { id: 3, name: 'Team work' }
  ]);

  return (
    <div style={{ margin: 10 }}>
      <TagsInput
        tags={tags}
        setTags={setTags}
        suggestions={techSkills}
        noSuggestionsText='No tech skills found'
      />
      <TagsInput
        tags={tags}
        setTags={setTags}
        suggestions={softSkills}
        noSuggestionsText='No soft skills found'
      />
    </div>
  );
};

export default App;
