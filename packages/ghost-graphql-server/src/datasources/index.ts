import AuthorsAPI from './authors';
import PagesAPI from './pages';
import PostsAPI from './posts';
import SettingsAPI from './settings';
import TagsAPI from './tags';

export default () => ({
  authorsAPI: new AuthorsAPI(),
  pagesAPI: new PagesAPI(),
  postsAPI: new PostsAPI(),
  settingsAPI: new SettingsAPI(),
  tagsAPI: new TagsAPI(),
});
