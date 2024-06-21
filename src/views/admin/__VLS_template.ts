import zhCn from "element-plus/es/locale/lang/zh-cn";
import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name, tableData, searchParams, total, handleSizeChange, handleCurrentChange } from "./AdminUserPage.vue";

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'ElTable', typeof __VLS_localComponents, "ElTable", "elTable", "el-table"> &
__VLS_WithComponent<'ElTableColumn', typeof __VLS_localComponents, "ElTableColumn", "elTableColumn", "el-table-column"> &
__VLS_WithComponent<'ElConfigProvider', typeof __VLS_localComponents, "ElConfigProvider", "elConfigProvider", "el-config-provider"> &
__VLS_WithComponent<'ElPagination', typeof __VLS_localComponents, "ElPagination", "elPagination", "el-pagination">;
__VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div;
__VLS_intrinsicElements.h2; __VLS_intrinsicElements.h2;
__VLS_components.ElTable; __VLS_components.ElTable; __VLS_components.elTable; __VLS_components.elTable; __VLS_components["el-table"]; __VLS_components["el-table"];
// @ts-ignore
[ElTable, ElTable,];
__VLS_components.ElTableColumn; __VLS_components.ElTableColumn; __VLS_components.ElTableColumn; __VLS_components.elTableColumn; __VLS_components.elTableColumn; __VLS_components.elTableColumn; __VLS_components["el-table-column"]; __VLS_components["el-table-column"]; __VLS_components["el-table-column"];
// @ts-ignore
[ElTableColumn, ElTableColumn, ElTableColumn,];
__VLS_components.ElConfigProvider; __VLS_components.ElConfigProvider; __VLS_components.elConfigProvider; __VLS_components.elConfigProvider; __VLS_components["el-config-provider"]; __VLS_components["el-config-provider"];
// @ts-ignore
[ElConfigProvider, ElConfigProvider,];
__VLS_components.ElPagination; __VLS_components.elPagination; __VLS_components["el-pagination"];
// @ts-ignore
[ElPagination,];
{
const __VLS_0 = __VLS_intrinsicElements["div"];
const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
const __VLS_2 = __VLS_1({ ...{}, id: ("adminUserPage"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, id: ("adminUserPage"), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
const __VLS_5 = __VLS_intrinsicElements["h2"];
const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
const __VLS_7 = __VLS_6({ ...{}, style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, style: ({}), });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
(__VLS_8.slots!).default;
}
{
const __VLS_10 = ({} as 'ElTable' extends keyof typeof __VLS_ctx ? { 'ElTable': typeof __VLS_ctx.ElTable; } : 'elTable' extends keyof typeof __VLS_ctx ? { 'ElTable': typeof __VLS_ctx.elTable; } : 'el-table' extends keyof typeof __VLS_ctx ? { 'ElTable': (typeof __VLS_ctx)["el-table"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ElTable;
const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({ ...{}, data: ((__VLS_ctx.tableData)), style: ({}), }));
({} as { ElTable: typeof __VLS_10; }).ElTable;
({} as { ElTable: typeof __VLS_10; }).ElTable;
const __VLS_12 = __VLS_11({ ...{}, data: ((__VLS_ctx.tableData)), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, data: ((__VLS_ctx.tableData)), style: ({}), });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
{
const __VLS_15 = ({} as 'ElTableColumn' extends keyof typeof __VLS_ctx ? { 'ElTableColumn': typeof __VLS_ctx.ElTableColumn; } : 'elTableColumn' extends keyof typeof __VLS_ctx ? { 'ElTableColumn': typeof __VLS_ctx.elTableColumn; } : 'el-table-column' extends keyof typeof __VLS_ctx ? { 'ElTableColumn': (typeof __VLS_ctx)["el-table-column"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ElTableColumn;
const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({ ...{}, prop: ("date"), label: ("Date"), width: ("180"), }));
({} as { ElTableColumn: typeof __VLS_15; }).ElTableColumn;
const __VLS_17 = __VLS_16({ ...{}, prop: ("date"), label: ("Date"), width: ("180"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{}, prop: ("date"), label: ("Date"), width: ("180"), });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
}
{
const __VLS_20 = ({} as 'ElTableColumn' extends keyof typeof __VLS_ctx ? { 'ElTableColumn': typeof __VLS_ctx.ElTableColumn; } : 'elTableColumn' extends keyof typeof __VLS_ctx ? { 'ElTableColumn': typeof __VLS_ctx.elTableColumn; } : 'el-table-column' extends keyof typeof __VLS_ctx ? { 'ElTableColumn': (typeof __VLS_ctx)["el-table-column"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ElTableColumn;
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{}, prop: ("name"), label: ("Name"), width: ("180"), }));
({} as { ElTableColumn: typeof __VLS_20; }).ElTableColumn;
const __VLS_22 = __VLS_21({ ...{}, prop: ("name"), label: ("Name"), width: ("180"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{}, prop: ("name"), label: ("Name"), width: ("180"), });
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23.emit>;
}
{
const __VLS_25 = ({} as 'ElTableColumn' extends keyof typeof __VLS_ctx ? { 'ElTableColumn': typeof __VLS_ctx.ElTableColumn; } : 'elTableColumn' extends keyof typeof __VLS_ctx ? { 'ElTableColumn': typeof __VLS_ctx.elTableColumn; } : 'el-table-column' extends keyof typeof __VLS_ctx ? { 'ElTableColumn': (typeof __VLS_ctx)["el-table-column"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ElTableColumn;
const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ ...{}, prop: ("address"), label: ("Address"), }));
({} as { ElTableColumn: typeof __VLS_25; }).ElTableColumn;
const __VLS_27 = __VLS_26({ ...{}, prop: ("address"), label: ("Address"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_25, typeof __VLS_27> & Record<string, unknown>) => void)({ ...{}, prop: ("address"), label: ("Address"), });
const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27)!;
let __VLS_29!: __VLS_NormalizeEmits<typeof __VLS_28.emit>;
}
(__VLS_13.slots!).default;
}
{
const __VLS_30 = __VLS_intrinsicElements["div"];
const __VLS_31 = __VLS_elementAsFunctionalComponent(__VLS_30);
const __VLS_32 = __VLS_31({ ...{}, style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_30, typeof __VLS_32> & Record<string, unknown>) => void)({ ...{}, style: ({}), });
const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32)!;
let __VLS_34!: __VLS_NormalizeEmits<typeof __VLS_33.emit>;
{
const __VLS_35 = ({} as 'ElConfigProvider' extends keyof typeof __VLS_ctx ? { 'ElConfigProvider': typeof __VLS_ctx.ElConfigProvider; } : 'elConfigProvider' extends keyof typeof __VLS_ctx ? { 'ElConfigProvider': typeof __VLS_ctx.elConfigProvider; } : 'el-config-provider' extends keyof typeof __VLS_ctx ? { 'ElConfigProvider': (typeof __VLS_ctx)["el-config-provider"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ElConfigProvider;
const __VLS_36 = __VLS_asFunctionalComponent(__VLS_35, new __VLS_35({ ...{}, locale: ((__VLS_ctx.zhCn)), }));
({} as { ElConfigProvider: typeof __VLS_35; }).ElConfigProvider;
({} as { ElConfigProvider: typeof __VLS_35; }).ElConfigProvider;
const __VLS_37 = __VLS_36({ ...{}, locale: ((__VLS_ctx.zhCn)), }, ...__VLS_functionalComponentArgsRest(__VLS_36));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_35, typeof __VLS_37> & Record<string, unknown>) => void)({ ...{}, locale: ((__VLS_ctx.zhCn)), });
const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37)!;
let __VLS_39!: __VLS_NormalizeEmits<typeof __VLS_38.emit>;
{
const __VLS_40 = ({} as 'ElPagination' extends keyof typeof __VLS_ctx ? { 'ElPagination': typeof __VLS_ctx.ElPagination; } : 'elPagination' extends keyof typeof __VLS_ctx ? { 'ElPagination': typeof __VLS_ctx.elPagination; } : 'el-pagination' extends keyof typeof __VLS_ctx ? { 'ElPagination': (typeof __VLS_ctx)["el-pagination"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ElPagination;
const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({ ...{ onSizeChange: {} as any, onCurrentChange: {} as any, }, currentPage: ((__VLS_ctx.searchParams.current)), pageSize: ((__VLS_ctx.searchParams.pageSize)), layout: ("total, prev, pager, next"), total: ((__VLS_ctx.total)), }));
({} as { ElPagination: typeof __VLS_40; }).ElPagination;
const __VLS_42 = __VLS_41({ ...{ onSizeChange: {} as any, onCurrentChange: {} as any, }, currentPage: ((__VLS_ctx.searchParams.current)), pageSize: ((__VLS_ctx.searchParams.pageSize)), layout: ("total, prev, pager, next"), total: ((__VLS_ctx.total)), }, ...__VLS_functionalComponentArgsRest(__VLS_41));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_40, typeof __VLS_42> & Record<string, unknown>) => void)({ ...{ onSizeChange: {} as any, onCurrentChange: {} as any, }, currentPage: ((__VLS_ctx.searchParams.current)), pageSize: ((__VLS_ctx.searchParams.pageSize)), layout: ("total, prev, pager, next"), total: ((__VLS_ctx.total)), });
const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42)!;
let __VLS_44!: __VLS_NormalizeEmits<typeof __VLS_43.emit>;
let __VLS_45 = { 'size-change': __VLS_pickEvent(__VLS_44['size-change'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_41, typeof __VLS_42>).onSizeChange) };
__VLS_45 = { "size-change": (__VLS_ctx.handleSizeChange) };
let __VLS_46 = { 'current-change': __VLS_pickEvent(__VLS_44['current-change'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_41, typeof __VLS_42>).onCurrentChange) };
__VLS_46 = { "current-change": (__VLS_ctx.handleCurrentChange) };
}
(__VLS_38.slots!).default;
}
(__VLS_33.slots!).default;
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {};
// @ts-ignore
[tableData, tableData, tableData, zhCn, zhCn, zhCn, searchParams, searchParams, total, searchParams, searchParams, total, searchParams, searchParams, total, handleSizeChange, handleCurrentChange,];
return __VLS_slots;
}
