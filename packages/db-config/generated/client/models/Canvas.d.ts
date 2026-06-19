import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Canvas
 *
 */
export type CanvasModel = runtime.Types.Result.DefaultSelection<Prisma.$CanvasPayload>;
export type AggregateCanvas = {
    _count: CanvasCountAggregateOutputType | null;
    _avg: CanvasAvgAggregateOutputType | null;
    _sum: CanvasSumAggregateOutputType | null;
    _min: CanvasMinAggregateOutputType | null;
    _max: CanvasMaxAggregateOutputType | null;
};
export type CanvasAvgAggregateOutputType = {
    id: number | null;
};
export type CanvasSumAggregateOutputType = {
    id: number | null;
};
export type CanvasMinAggregateOutputType = {
    id: number | null;
    slug: string | null;
    userId: string | null;
    roomId: string | null;
};
export type CanvasMaxAggregateOutputType = {
    id: number | null;
    slug: string | null;
    userId: string | null;
    roomId: string | null;
};
export type CanvasCountAggregateOutputType = {
    id: number;
    slug: number;
    userId: number;
    roomId: number;
    _all: number;
};
export type CanvasAvgAggregateInputType = {
    id?: true;
};
export type CanvasSumAggregateInputType = {
    id?: true;
};
export type CanvasMinAggregateInputType = {
    id?: true;
    slug?: true;
    userId?: true;
    roomId?: true;
};
export type CanvasMaxAggregateInputType = {
    id?: true;
    slug?: true;
    userId?: true;
    roomId?: true;
};
export type CanvasCountAggregateInputType = {
    id?: true;
    slug?: true;
    userId?: true;
    roomId?: true;
    _all?: true;
};
export type CanvasAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Canvas to aggregate.
     */
    where?: Prisma.CanvasWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Canvas to fetch.
     */
    orderBy?: Prisma.CanvasOrderByWithRelationInput | Prisma.CanvasOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.CanvasWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Canvas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Canvas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Canvas
    **/
    _count?: true | CanvasCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: CanvasAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: CanvasSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: CanvasMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: CanvasMaxAggregateInputType;
};
export type GetCanvasAggregateType<T extends CanvasAggregateArgs> = {
    [P in keyof T & keyof AggregateCanvas]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCanvas[P]> : Prisma.GetScalarType<T[P], AggregateCanvas[P]>;
};
export type CanvasGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CanvasWhereInput;
    orderBy?: Prisma.CanvasOrderByWithAggregationInput | Prisma.CanvasOrderByWithAggregationInput[];
    by: Prisma.CanvasScalarFieldEnum[] | Prisma.CanvasScalarFieldEnum;
    having?: Prisma.CanvasScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CanvasCountAggregateInputType | true;
    _avg?: CanvasAvgAggregateInputType;
    _sum?: CanvasSumAggregateInputType;
    _min?: CanvasMinAggregateInputType;
    _max?: CanvasMaxAggregateInputType;
};
export type CanvasGroupByOutputType = {
    id: number;
    slug: string;
    userId: string;
    roomId: string;
    _count: CanvasCountAggregateOutputType | null;
    _avg: CanvasAvgAggregateOutputType | null;
    _sum: CanvasSumAggregateOutputType | null;
    _min: CanvasMinAggregateOutputType | null;
    _max: CanvasMaxAggregateOutputType | null;
};
export type GetCanvasGroupByPayload<T extends CanvasGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CanvasGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CanvasGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CanvasGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CanvasGroupByOutputType[P]>;
}>>;
export type CanvasWhereInput = {
    AND?: Prisma.CanvasWhereInput | Prisma.CanvasWhereInput[];
    OR?: Prisma.CanvasWhereInput[];
    NOT?: Prisma.CanvasWhereInput | Prisma.CanvasWhereInput[];
    id?: Prisma.IntFilter<"Canvas"> | number;
    slug?: Prisma.StringFilter<"Canvas"> | string;
    userId?: Prisma.StringFilter<"Canvas"> | string;
    roomId?: Prisma.StringFilter<"Canvas"> | string;
    user?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.UsersWhereInput>;
    room?: Prisma.XOR<Prisma.RoomsScalarRelationFilter, Prisma.RoomsWhereInput>;
};
export type CanvasOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    roomId?: Prisma.SortOrder;
    user?: Prisma.UsersOrderByWithRelationInput;
    room?: Prisma.RoomsOrderByWithRelationInput;
};
export type CanvasWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.CanvasWhereInput | Prisma.CanvasWhereInput[];
    OR?: Prisma.CanvasWhereInput[];
    NOT?: Prisma.CanvasWhereInput | Prisma.CanvasWhereInput[];
    slug?: Prisma.StringFilter<"Canvas"> | string;
    userId?: Prisma.StringFilter<"Canvas"> | string;
    roomId?: Prisma.StringFilter<"Canvas"> | string;
    user?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.UsersWhereInput>;
    room?: Prisma.XOR<Prisma.RoomsScalarRelationFilter, Prisma.RoomsWhereInput>;
}, "id">;
export type CanvasOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    roomId?: Prisma.SortOrder;
    _count?: Prisma.CanvasCountOrderByAggregateInput;
    _avg?: Prisma.CanvasAvgOrderByAggregateInput;
    _max?: Prisma.CanvasMaxOrderByAggregateInput;
    _min?: Prisma.CanvasMinOrderByAggregateInput;
    _sum?: Prisma.CanvasSumOrderByAggregateInput;
};
export type CanvasScalarWhereWithAggregatesInput = {
    AND?: Prisma.CanvasScalarWhereWithAggregatesInput | Prisma.CanvasScalarWhereWithAggregatesInput[];
    OR?: Prisma.CanvasScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CanvasScalarWhereWithAggregatesInput | Prisma.CanvasScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Canvas"> | number;
    slug?: Prisma.StringWithAggregatesFilter<"Canvas"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"Canvas"> | string;
    roomId?: Prisma.StringWithAggregatesFilter<"Canvas"> | string;
};
export type CanvasCreateInput = {
    slug: string;
    user: Prisma.UsersCreateNestedOneWithoutCanvasInput;
    room: Prisma.RoomsCreateNestedOneWithoutCanvasInput;
};
export type CanvasUncheckedCreateInput = {
    id?: number;
    slug: string;
    userId: string;
    roomId: string;
};
export type CanvasUpdateInput = {
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    user?: Prisma.UsersUpdateOneRequiredWithoutCanvasNestedInput;
    room?: Prisma.RoomsUpdateOneRequiredWithoutCanvasNestedInput;
};
export type CanvasUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    roomId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CanvasCreateManyInput = {
    id?: number;
    slug: string;
    userId: string;
    roomId: string;
};
export type CanvasUpdateManyMutationInput = {
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CanvasUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    roomId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CanvasListRelationFilter = {
    every?: Prisma.CanvasWhereInput;
    some?: Prisma.CanvasWhereInput;
    none?: Prisma.CanvasWhereInput;
};
export type CanvasOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CanvasCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    roomId?: Prisma.SortOrder;
};
export type CanvasAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type CanvasMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    roomId?: Prisma.SortOrder;
};
export type CanvasMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    roomId?: Prisma.SortOrder;
};
export type CanvasSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type CanvasCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.CanvasCreateWithoutUserInput, Prisma.CanvasUncheckedCreateWithoutUserInput> | Prisma.CanvasCreateWithoutUserInput[] | Prisma.CanvasUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CanvasCreateOrConnectWithoutUserInput | Prisma.CanvasCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.CanvasCreateManyUserInputEnvelope;
    connect?: Prisma.CanvasWhereUniqueInput | Prisma.CanvasWhereUniqueInput[];
};
export type CanvasUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.CanvasCreateWithoutUserInput, Prisma.CanvasUncheckedCreateWithoutUserInput> | Prisma.CanvasCreateWithoutUserInput[] | Prisma.CanvasUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CanvasCreateOrConnectWithoutUserInput | Prisma.CanvasCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.CanvasCreateManyUserInputEnvelope;
    connect?: Prisma.CanvasWhereUniqueInput | Prisma.CanvasWhereUniqueInput[];
};
export type CanvasUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.CanvasCreateWithoutUserInput, Prisma.CanvasUncheckedCreateWithoutUserInput> | Prisma.CanvasCreateWithoutUserInput[] | Prisma.CanvasUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CanvasCreateOrConnectWithoutUserInput | Prisma.CanvasCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.CanvasUpsertWithWhereUniqueWithoutUserInput | Prisma.CanvasUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.CanvasCreateManyUserInputEnvelope;
    set?: Prisma.CanvasWhereUniqueInput | Prisma.CanvasWhereUniqueInput[];
    disconnect?: Prisma.CanvasWhereUniqueInput | Prisma.CanvasWhereUniqueInput[];
    delete?: Prisma.CanvasWhereUniqueInput | Prisma.CanvasWhereUniqueInput[];
    connect?: Prisma.CanvasWhereUniqueInput | Prisma.CanvasWhereUniqueInput[];
    update?: Prisma.CanvasUpdateWithWhereUniqueWithoutUserInput | Prisma.CanvasUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.CanvasUpdateManyWithWhereWithoutUserInput | Prisma.CanvasUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.CanvasScalarWhereInput | Prisma.CanvasScalarWhereInput[];
};
export type CanvasUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.CanvasCreateWithoutUserInput, Prisma.CanvasUncheckedCreateWithoutUserInput> | Prisma.CanvasCreateWithoutUserInput[] | Prisma.CanvasUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CanvasCreateOrConnectWithoutUserInput | Prisma.CanvasCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.CanvasUpsertWithWhereUniqueWithoutUserInput | Prisma.CanvasUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.CanvasCreateManyUserInputEnvelope;
    set?: Prisma.CanvasWhereUniqueInput | Prisma.CanvasWhereUniqueInput[];
    disconnect?: Prisma.CanvasWhereUniqueInput | Prisma.CanvasWhereUniqueInput[];
    delete?: Prisma.CanvasWhereUniqueInput | Prisma.CanvasWhereUniqueInput[];
    connect?: Prisma.CanvasWhereUniqueInput | Prisma.CanvasWhereUniqueInput[];
    update?: Prisma.CanvasUpdateWithWhereUniqueWithoutUserInput | Prisma.CanvasUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.CanvasUpdateManyWithWhereWithoutUserInput | Prisma.CanvasUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.CanvasScalarWhereInput | Prisma.CanvasScalarWhereInput[];
};
export type CanvasCreateNestedManyWithoutRoomInput = {
    create?: Prisma.XOR<Prisma.CanvasCreateWithoutRoomInput, Prisma.CanvasUncheckedCreateWithoutRoomInput> | Prisma.CanvasCreateWithoutRoomInput[] | Prisma.CanvasUncheckedCreateWithoutRoomInput[];
    connectOrCreate?: Prisma.CanvasCreateOrConnectWithoutRoomInput | Prisma.CanvasCreateOrConnectWithoutRoomInput[];
    createMany?: Prisma.CanvasCreateManyRoomInputEnvelope;
    connect?: Prisma.CanvasWhereUniqueInput | Prisma.CanvasWhereUniqueInput[];
};
export type CanvasUncheckedCreateNestedManyWithoutRoomInput = {
    create?: Prisma.XOR<Prisma.CanvasCreateWithoutRoomInput, Prisma.CanvasUncheckedCreateWithoutRoomInput> | Prisma.CanvasCreateWithoutRoomInput[] | Prisma.CanvasUncheckedCreateWithoutRoomInput[];
    connectOrCreate?: Prisma.CanvasCreateOrConnectWithoutRoomInput | Prisma.CanvasCreateOrConnectWithoutRoomInput[];
    createMany?: Prisma.CanvasCreateManyRoomInputEnvelope;
    connect?: Prisma.CanvasWhereUniqueInput | Prisma.CanvasWhereUniqueInput[];
};
export type CanvasUpdateManyWithoutRoomNestedInput = {
    create?: Prisma.XOR<Prisma.CanvasCreateWithoutRoomInput, Prisma.CanvasUncheckedCreateWithoutRoomInput> | Prisma.CanvasCreateWithoutRoomInput[] | Prisma.CanvasUncheckedCreateWithoutRoomInput[];
    connectOrCreate?: Prisma.CanvasCreateOrConnectWithoutRoomInput | Prisma.CanvasCreateOrConnectWithoutRoomInput[];
    upsert?: Prisma.CanvasUpsertWithWhereUniqueWithoutRoomInput | Prisma.CanvasUpsertWithWhereUniqueWithoutRoomInput[];
    createMany?: Prisma.CanvasCreateManyRoomInputEnvelope;
    set?: Prisma.CanvasWhereUniqueInput | Prisma.CanvasWhereUniqueInput[];
    disconnect?: Prisma.CanvasWhereUniqueInput | Prisma.CanvasWhereUniqueInput[];
    delete?: Prisma.CanvasWhereUniqueInput | Prisma.CanvasWhereUniqueInput[];
    connect?: Prisma.CanvasWhereUniqueInput | Prisma.CanvasWhereUniqueInput[];
    update?: Prisma.CanvasUpdateWithWhereUniqueWithoutRoomInput | Prisma.CanvasUpdateWithWhereUniqueWithoutRoomInput[];
    updateMany?: Prisma.CanvasUpdateManyWithWhereWithoutRoomInput | Prisma.CanvasUpdateManyWithWhereWithoutRoomInput[];
    deleteMany?: Prisma.CanvasScalarWhereInput | Prisma.CanvasScalarWhereInput[];
};
export type CanvasUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: Prisma.XOR<Prisma.CanvasCreateWithoutRoomInput, Prisma.CanvasUncheckedCreateWithoutRoomInput> | Prisma.CanvasCreateWithoutRoomInput[] | Prisma.CanvasUncheckedCreateWithoutRoomInput[];
    connectOrCreate?: Prisma.CanvasCreateOrConnectWithoutRoomInput | Prisma.CanvasCreateOrConnectWithoutRoomInput[];
    upsert?: Prisma.CanvasUpsertWithWhereUniqueWithoutRoomInput | Prisma.CanvasUpsertWithWhereUniqueWithoutRoomInput[];
    createMany?: Prisma.CanvasCreateManyRoomInputEnvelope;
    set?: Prisma.CanvasWhereUniqueInput | Prisma.CanvasWhereUniqueInput[];
    disconnect?: Prisma.CanvasWhereUniqueInput | Prisma.CanvasWhereUniqueInput[];
    delete?: Prisma.CanvasWhereUniqueInput | Prisma.CanvasWhereUniqueInput[];
    connect?: Prisma.CanvasWhereUniqueInput | Prisma.CanvasWhereUniqueInput[];
    update?: Prisma.CanvasUpdateWithWhereUniqueWithoutRoomInput | Prisma.CanvasUpdateWithWhereUniqueWithoutRoomInput[];
    updateMany?: Prisma.CanvasUpdateManyWithWhereWithoutRoomInput | Prisma.CanvasUpdateManyWithWhereWithoutRoomInput[];
    deleteMany?: Prisma.CanvasScalarWhereInput | Prisma.CanvasScalarWhereInput[];
};
export type CanvasCreateWithoutUserInput = {
    slug: string;
    room: Prisma.RoomsCreateNestedOneWithoutCanvasInput;
};
export type CanvasUncheckedCreateWithoutUserInput = {
    id?: number;
    slug: string;
    roomId: string;
};
export type CanvasCreateOrConnectWithoutUserInput = {
    where: Prisma.CanvasWhereUniqueInput;
    create: Prisma.XOR<Prisma.CanvasCreateWithoutUserInput, Prisma.CanvasUncheckedCreateWithoutUserInput>;
};
export type CanvasCreateManyUserInputEnvelope = {
    data: Prisma.CanvasCreateManyUserInput | Prisma.CanvasCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type CanvasUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.CanvasWhereUniqueInput;
    update: Prisma.XOR<Prisma.CanvasUpdateWithoutUserInput, Prisma.CanvasUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.CanvasCreateWithoutUserInput, Prisma.CanvasUncheckedCreateWithoutUserInput>;
};
export type CanvasUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.CanvasWhereUniqueInput;
    data: Prisma.XOR<Prisma.CanvasUpdateWithoutUserInput, Prisma.CanvasUncheckedUpdateWithoutUserInput>;
};
export type CanvasUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.CanvasScalarWhereInput;
    data: Prisma.XOR<Prisma.CanvasUpdateManyMutationInput, Prisma.CanvasUncheckedUpdateManyWithoutUserInput>;
};
export type CanvasScalarWhereInput = {
    AND?: Prisma.CanvasScalarWhereInput | Prisma.CanvasScalarWhereInput[];
    OR?: Prisma.CanvasScalarWhereInput[];
    NOT?: Prisma.CanvasScalarWhereInput | Prisma.CanvasScalarWhereInput[];
    id?: Prisma.IntFilter<"Canvas"> | number;
    slug?: Prisma.StringFilter<"Canvas"> | string;
    userId?: Prisma.StringFilter<"Canvas"> | string;
    roomId?: Prisma.StringFilter<"Canvas"> | string;
};
export type CanvasCreateWithoutRoomInput = {
    slug: string;
    user: Prisma.UsersCreateNestedOneWithoutCanvasInput;
};
export type CanvasUncheckedCreateWithoutRoomInput = {
    id?: number;
    slug: string;
    userId: string;
};
export type CanvasCreateOrConnectWithoutRoomInput = {
    where: Prisma.CanvasWhereUniqueInput;
    create: Prisma.XOR<Prisma.CanvasCreateWithoutRoomInput, Prisma.CanvasUncheckedCreateWithoutRoomInput>;
};
export type CanvasCreateManyRoomInputEnvelope = {
    data: Prisma.CanvasCreateManyRoomInput | Prisma.CanvasCreateManyRoomInput[];
    skipDuplicates?: boolean;
};
export type CanvasUpsertWithWhereUniqueWithoutRoomInput = {
    where: Prisma.CanvasWhereUniqueInput;
    update: Prisma.XOR<Prisma.CanvasUpdateWithoutRoomInput, Prisma.CanvasUncheckedUpdateWithoutRoomInput>;
    create: Prisma.XOR<Prisma.CanvasCreateWithoutRoomInput, Prisma.CanvasUncheckedCreateWithoutRoomInput>;
};
export type CanvasUpdateWithWhereUniqueWithoutRoomInput = {
    where: Prisma.CanvasWhereUniqueInput;
    data: Prisma.XOR<Prisma.CanvasUpdateWithoutRoomInput, Prisma.CanvasUncheckedUpdateWithoutRoomInput>;
};
export type CanvasUpdateManyWithWhereWithoutRoomInput = {
    where: Prisma.CanvasScalarWhereInput;
    data: Prisma.XOR<Prisma.CanvasUpdateManyMutationInput, Prisma.CanvasUncheckedUpdateManyWithoutRoomInput>;
};
export type CanvasCreateManyUserInput = {
    id?: number;
    slug: string;
    roomId: string;
};
export type CanvasUpdateWithoutUserInput = {
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    room?: Prisma.RoomsUpdateOneRequiredWithoutCanvasNestedInput;
};
export type CanvasUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    roomId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CanvasUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    roomId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CanvasCreateManyRoomInput = {
    id?: number;
    slug: string;
    userId: string;
};
export type CanvasUpdateWithoutRoomInput = {
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    user?: Prisma.UsersUpdateOneRequiredWithoutCanvasNestedInput;
};
export type CanvasUncheckedUpdateWithoutRoomInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CanvasUncheckedUpdateManyWithoutRoomInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CanvasSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    slug?: boolean;
    userId?: boolean;
    roomId?: boolean;
    user?: boolean | Prisma.UsersDefaultArgs<ExtArgs>;
    room?: boolean | Prisma.RoomsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["canvas"]>;
export type CanvasSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    slug?: boolean;
    userId?: boolean;
    roomId?: boolean;
    user?: boolean | Prisma.UsersDefaultArgs<ExtArgs>;
    room?: boolean | Prisma.RoomsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["canvas"]>;
export type CanvasSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    slug?: boolean;
    userId?: boolean;
    roomId?: boolean;
    user?: boolean | Prisma.UsersDefaultArgs<ExtArgs>;
    room?: boolean | Prisma.RoomsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["canvas"]>;
export type CanvasSelectScalar = {
    id?: boolean;
    slug?: boolean;
    userId?: boolean;
    roomId?: boolean;
};
export type CanvasOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "slug" | "userId" | "roomId", ExtArgs["result"]["canvas"]>;
export type CanvasInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UsersDefaultArgs<ExtArgs>;
    room?: boolean | Prisma.RoomsDefaultArgs<ExtArgs>;
};
export type CanvasIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UsersDefaultArgs<ExtArgs>;
    room?: boolean | Prisma.RoomsDefaultArgs<ExtArgs>;
};
export type CanvasIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UsersDefaultArgs<ExtArgs>;
    room?: boolean | Prisma.RoomsDefaultArgs<ExtArgs>;
};
export type $CanvasPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Canvas";
    objects: {
        user: Prisma.$UsersPayload<ExtArgs>;
        room: Prisma.$RoomsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        slug: string;
        userId: string;
        roomId: string;
    }, ExtArgs["result"]["canvas"]>;
    composites: {};
};
export type CanvasGetPayload<S extends boolean | null | undefined | CanvasDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CanvasPayload, S>;
export type CanvasCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CanvasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CanvasCountAggregateInputType | true;
};
export interface CanvasDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Canvas'];
        meta: {
            name: 'Canvas';
        };
    };
    /**
     * Find zero or one Canvas that matches the filter.
     * @param {CanvasFindUniqueArgs} args - Arguments to find a Canvas
     * @example
     * // Get one Canvas
     * const canvas = await prisma.canvas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CanvasFindUniqueArgs>(args: Prisma.SelectSubset<T, CanvasFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CanvasClient<runtime.Types.Result.GetResult<Prisma.$CanvasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Canvas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CanvasFindUniqueOrThrowArgs} args - Arguments to find a Canvas
     * @example
     * // Get one Canvas
     * const canvas = await prisma.canvas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CanvasFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CanvasFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CanvasClient<runtime.Types.Result.GetResult<Prisma.$CanvasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Canvas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CanvasFindFirstArgs} args - Arguments to find a Canvas
     * @example
     * // Get one Canvas
     * const canvas = await prisma.canvas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CanvasFindFirstArgs>(args?: Prisma.SelectSubset<T, CanvasFindFirstArgs<ExtArgs>>): Prisma.Prisma__CanvasClient<runtime.Types.Result.GetResult<Prisma.$CanvasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Canvas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CanvasFindFirstOrThrowArgs} args - Arguments to find a Canvas
     * @example
     * // Get one Canvas
     * const canvas = await prisma.canvas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CanvasFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CanvasFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CanvasClient<runtime.Types.Result.GetResult<Prisma.$CanvasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Canvas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CanvasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Canvas
     * const canvas = await prisma.canvas.findMany()
     *
     * // Get first 10 Canvas
     * const canvas = await prisma.canvas.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const canvasWithIdOnly = await prisma.canvas.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CanvasFindManyArgs>(args?: Prisma.SelectSubset<T, CanvasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CanvasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Canvas.
     * @param {CanvasCreateArgs} args - Arguments to create a Canvas.
     * @example
     * // Create one Canvas
     * const Canvas = await prisma.canvas.create({
     *   data: {
     *     // ... data to create a Canvas
     *   }
     * })
     *
     */
    create<T extends CanvasCreateArgs>(args: Prisma.SelectSubset<T, CanvasCreateArgs<ExtArgs>>): Prisma.Prisma__CanvasClient<runtime.Types.Result.GetResult<Prisma.$CanvasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Canvas.
     * @param {CanvasCreateManyArgs} args - Arguments to create many Canvas.
     * @example
     * // Create many Canvas
     * const canvas = await prisma.canvas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CanvasCreateManyArgs>(args?: Prisma.SelectSubset<T, CanvasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Canvas and returns the data saved in the database.
     * @param {CanvasCreateManyAndReturnArgs} args - Arguments to create many Canvas.
     * @example
     * // Create many Canvas
     * const canvas = await prisma.canvas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Canvas and only return the `id`
     * const canvasWithIdOnly = await prisma.canvas.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CanvasCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CanvasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CanvasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Canvas.
     * @param {CanvasDeleteArgs} args - Arguments to delete one Canvas.
     * @example
     * // Delete one Canvas
     * const Canvas = await prisma.canvas.delete({
     *   where: {
     *     // ... filter to delete one Canvas
     *   }
     * })
     *
     */
    delete<T extends CanvasDeleteArgs>(args: Prisma.SelectSubset<T, CanvasDeleteArgs<ExtArgs>>): Prisma.Prisma__CanvasClient<runtime.Types.Result.GetResult<Prisma.$CanvasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Canvas.
     * @param {CanvasUpdateArgs} args - Arguments to update one Canvas.
     * @example
     * // Update one Canvas
     * const canvas = await prisma.canvas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CanvasUpdateArgs>(args: Prisma.SelectSubset<T, CanvasUpdateArgs<ExtArgs>>): Prisma.Prisma__CanvasClient<runtime.Types.Result.GetResult<Prisma.$CanvasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Canvas.
     * @param {CanvasDeleteManyArgs} args - Arguments to filter Canvas to delete.
     * @example
     * // Delete a few Canvas
     * const { count } = await prisma.canvas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CanvasDeleteManyArgs>(args?: Prisma.SelectSubset<T, CanvasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Canvas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CanvasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Canvas
     * const canvas = await prisma.canvas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CanvasUpdateManyArgs>(args: Prisma.SelectSubset<T, CanvasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Canvas and returns the data updated in the database.
     * @param {CanvasUpdateManyAndReturnArgs} args - Arguments to update many Canvas.
     * @example
     * // Update many Canvas
     * const canvas = await prisma.canvas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Canvas and only return the `id`
     * const canvasWithIdOnly = await prisma.canvas.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends CanvasUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CanvasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CanvasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Canvas.
     * @param {CanvasUpsertArgs} args - Arguments to update or create a Canvas.
     * @example
     * // Update or create a Canvas
     * const canvas = await prisma.canvas.upsert({
     *   create: {
     *     // ... data to create a Canvas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Canvas we want to update
     *   }
     * })
     */
    upsert<T extends CanvasUpsertArgs>(args: Prisma.SelectSubset<T, CanvasUpsertArgs<ExtArgs>>): Prisma.Prisma__CanvasClient<runtime.Types.Result.GetResult<Prisma.$CanvasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Canvas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CanvasCountArgs} args - Arguments to filter Canvas to count.
     * @example
     * // Count the number of Canvas
     * const count = await prisma.canvas.count({
     *   where: {
     *     // ... the filter for the Canvas we want to count
     *   }
     * })
    **/
    count<T extends CanvasCountArgs>(args?: Prisma.Subset<T, CanvasCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CanvasCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Canvas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CanvasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CanvasAggregateArgs>(args: Prisma.Subset<T, CanvasAggregateArgs>): Prisma.PrismaPromise<GetCanvasAggregateType<T>>;
    /**
     * Group by Canvas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CanvasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends CanvasGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CanvasGroupByArgs['orderBy'];
    } : {
        orderBy?: CanvasGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CanvasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCanvasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Canvas model
     */
    readonly fields: CanvasFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Canvas.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__CanvasClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UsersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UsersDefaultArgs<ExtArgs>>): Prisma.Prisma__UsersClient<runtime.Types.Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    room<T extends Prisma.RoomsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RoomsDefaultArgs<ExtArgs>>): Prisma.Prisma__RoomsClient<runtime.Types.Result.GetResult<Prisma.$RoomsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Canvas model
 */
export interface CanvasFieldRefs {
    readonly id: Prisma.FieldRef<"Canvas", 'Int'>;
    readonly slug: Prisma.FieldRef<"Canvas", 'String'>;
    readonly userId: Prisma.FieldRef<"Canvas", 'String'>;
    readonly roomId: Prisma.FieldRef<"Canvas", 'String'>;
}
/**
 * Canvas findUnique
 */
export type CanvasFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Canvas
     */
    select?: Prisma.CanvasSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Canvas
     */
    omit?: Prisma.CanvasOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CanvasInclude<ExtArgs> | null;
    /**
     * Filter, which Canvas to fetch.
     */
    where: Prisma.CanvasWhereUniqueInput;
};
/**
 * Canvas findUniqueOrThrow
 */
export type CanvasFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Canvas
     */
    select?: Prisma.CanvasSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Canvas
     */
    omit?: Prisma.CanvasOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CanvasInclude<ExtArgs> | null;
    /**
     * Filter, which Canvas to fetch.
     */
    where: Prisma.CanvasWhereUniqueInput;
};
/**
 * Canvas findFirst
 */
export type CanvasFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Canvas
     */
    select?: Prisma.CanvasSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Canvas
     */
    omit?: Prisma.CanvasOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CanvasInclude<ExtArgs> | null;
    /**
     * Filter, which Canvas to fetch.
     */
    where?: Prisma.CanvasWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Canvas to fetch.
     */
    orderBy?: Prisma.CanvasOrderByWithRelationInput | Prisma.CanvasOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Canvas.
     */
    cursor?: Prisma.CanvasWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Canvas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Canvas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Canvas.
     */
    distinct?: Prisma.CanvasScalarFieldEnum | Prisma.CanvasScalarFieldEnum[];
};
/**
 * Canvas findFirstOrThrow
 */
export type CanvasFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Canvas
     */
    select?: Prisma.CanvasSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Canvas
     */
    omit?: Prisma.CanvasOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CanvasInclude<ExtArgs> | null;
    /**
     * Filter, which Canvas to fetch.
     */
    where?: Prisma.CanvasWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Canvas to fetch.
     */
    orderBy?: Prisma.CanvasOrderByWithRelationInput | Prisma.CanvasOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Canvas.
     */
    cursor?: Prisma.CanvasWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Canvas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Canvas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Canvas.
     */
    distinct?: Prisma.CanvasScalarFieldEnum | Prisma.CanvasScalarFieldEnum[];
};
/**
 * Canvas findMany
 */
export type CanvasFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Canvas
     */
    select?: Prisma.CanvasSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Canvas
     */
    omit?: Prisma.CanvasOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CanvasInclude<ExtArgs> | null;
    /**
     * Filter, which Canvas to fetch.
     */
    where?: Prisma.CanvasWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Canvas to fetch.
     */
    orderBy?: Prisma.CanvasOrderByWithRelationInput | Prisma.CanvasOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Canvas.
     */
    cursor?: Prisma.CanvasWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Canvas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Canvas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Canvas.
     */
    distinct?: Prisma.CanvasScalarFieldEnum | Prisma.CanvasScalarFieldEnum[];
};
/**
 * Canvas create
 */
export type CanvasCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Canvas
     */
    select?: Prisma.CanvasSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Canvas
     */
    omit?: Prisma.CanvasOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CanvasInclude<ExtArgs> | null;
    /**
     * The data needed to create a Canvas.
     */
    data: Prisma.XOR<Prisma.CanvasCreateInput, Prisma.CanvasUncheckedCreateInput>;
};
/**
 * Canvas createMany
 */
export type CanvasCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Canvas.
     */
    data: Prisma.CanvasCreateManyInput | Prisma.CanvasCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Canvas createManyAndReturn
 */
export type CanvasCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Canvas
     */
    select?: Prisma.CanvasSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Canvas
     */
    omit?: Prisma.CanvasOmit<ExtArgs> | null;
    /**
     * The data used to create many Canvas.
     */
    data: Prisma.CanvasCreateManyInput | Prisma.CanvasCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CanvasIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Canvas update
 */
export type CanvasUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Canvas
     */
    select?: Prisma.CanvasSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Canvas
     */
    omit?: Prisma.CanvasOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CanvasInclude<ExtArgs> | null;
    /**
     * The data needed to update a Canvas.
     */
    data: Prisma.XOR<Prisma.CanvasUpdateInput, Prisma.CanvasUncheckedUpdateInput>;
    /**
     * Choose, which Canvas to update.
     */
    where: Prisma.CanvasWhereUniqueInput;
};
/**
 * Canvas updateMany
 */
export type CanvasUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Canvas.
     */
    data: Prisma.XOR<Prisma.CanvasUpdateManyMutationInput, Prisma.CanvasUncheckedUpdateManyInput>;
    /**
     * Filter which Canvas to update
     */
    where?: Prisma.CanvasWhereInput;
    /**
     * Limit how many Canvas to update.
     */
    limit?: number;
};
/**
 * Canvas updateManyAndReturn
 */
export type CanvasUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Canvas
     */
    select?: Prisma.CanvasSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Canvas
     */
    omit?: Prisma.CanvasOmit<ExtArgs> | null;
    /**
     * The data used to update Canvas.
     */
    data: Prisma.XOR<Prisma.CanvasUpdateManyMutationInput, Prisma.CanvasUncheckedUpdateManyInput>;
    /**
     * Filter which Canvas to update
     */
    where?: Prisma.CanvasWhereInput;
    /**
     * Limit how many Canvas to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CanvasIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Canvas upsert
 */
export type CanvasUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Canvas
     */
    select?: Prisma.CanvasSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Canvas
     */
    omit?: Prisma.CanvasOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CanvasInclude<ExtArgs> | null;
    /**
     * The filter to search for the Canvas to update in case it exists.
     */
    where: Prisma.CanvasWhereUniqueInput;
    /**
     * In case the Canvas found by the `where` argument doesn't exist, create a new Canvas with this data.
     */
    create: Prisma.XOR<Prisma.CanvasCreateInput, Prisma.CanvasUncheckedCreateInput>;
    /**
     * In case the Canvas was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.CanvasUpdateInput, Prisma.CanvasUncheckedUpdateInput>;
};
/**
 * Canvas delete
 */
export type CanvasDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Canvas
     */
    select?: Prisma.CanvasSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Canvas
     */
    omit?: Prisma.CanvasOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CanvasInclude<ExtArgs> | null;
    /**
     * Filter which Canvas to delete.
     */
    where: Prisma.CanvasWhereUniqueInput;
};
/**
 * Canvas deleteMany
 */
export type CanvasDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Canvas to delete
     */
    where?: Prisma.CanvasWhereInput;
    /**
     * Limit how many Canvas to delete.
     */
    limit?: number;
};
/**
 * Canvas without action
 */
export type CanvasDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Canvas
     */
    select?: Prisma.CanvasSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Canvas
     */
    omit?: Prisma.CanvasOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CanvasInclude<ExtArgs> | null;
};
//# sourceMappingURL=Canvas.d.ts.map