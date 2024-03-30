import {
  LayoutService,
  RestLayoutService,
  GraphQLLayoutService,
  constants,
} from '@sitecore-jss/sitecore-jss-nextjs';
import config from 'temp/config';

/**
 * Factory responsible for creating a LayoutService instance
 */
export class LayoutServiceFactory {
  /**
   * @param {string} siteName site name
   * @returns {LayoutService} service instance
   */
  create(siteName: string): LayoutService {
    console.log('layout service invoked');
    return process.env.FETCH_WITH === constants.FETCH_WITH.GRAPHQL
      ? new GraphQLLayoutService({
          endpoint: config.graphQLEndpoint,
          apiKey: config.sitecoreApiKey,
          siteName,
        })
      : new RestLayoutService({
          apiHost: this.IsExperienceEditorActive() ? '' : config.sitecoreApiHost,
          apiKey: this.IsExperienceEditorActive() ? '' : config.sitecoreApiKey,
          siteName,
          configurationName: 'default',
        });
  }

  IsExperienceEditorActive = function () {
    const paramsString = typeof window !== 'undefined' ? window?.location?.search : '';
    let params,
      flag = false;
    if (paramsString !== '') {
      params = new URLSearchParams(paramsString);
      flag = params.has('sc_mode');
    }
    return flag;
  };
}

/** LayoutServiceFactory singleton */
export const layoutServiceFactory = new LayoutServiceFactory();
