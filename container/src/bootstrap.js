import { mount as mountArticle } from 'article/ArticleApp';
import { mount as mountComments } from 'comments/CommentsApp';

mountArticle(document.getElementById('article-root'));
mountComments(document.getElementById('comments-root'));
