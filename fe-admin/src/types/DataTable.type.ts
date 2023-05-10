export type DataTableType = {
	label: Record<string, string>
	dataRow: Array<Partial<Record<keyof DataTableType['label'] | 'id', string>>>
}
