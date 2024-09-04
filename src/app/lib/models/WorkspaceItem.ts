export class WorkspaceItem {
  id: string = Date.now().toString();
  title: string = 'New item';
  secrets: { key: string; value: string }[] = [];
  notes: string = '';
}
