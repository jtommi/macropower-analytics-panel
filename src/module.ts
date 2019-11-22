import { PanelPlugin } from '@grafana/ui';
import { AnalyticsOptions, defaults } from './types';
import { AnalyticsPanel } from './AnalyticsPanel';
import { AnalyticsEditor } from './AnalyticsEditor';

export const plugin = new PanelPlugin<AnalyticsOptions>(AnalyticsPanel).setDefaults(defaults).setEditor(AnalyticsEditor);
