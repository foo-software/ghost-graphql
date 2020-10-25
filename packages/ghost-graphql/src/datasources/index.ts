import AuthorsDataSource from './authors';
import PagesDataSource from './pages';
import PostsDataSource from './posts';
import SettingsDataSource from './settings';
import TagsDataSource from './tags';

export default () => ({
  authorsDataSource: new AuthorsDataSource(),
  pagesDataSource: new PagesDataSource(),
  postsDataSource: new PostsDataSource(),
  settingsDataSource: new SettingsDataSource(),
  tagsDataSource: new TagsDataSource(),
});
