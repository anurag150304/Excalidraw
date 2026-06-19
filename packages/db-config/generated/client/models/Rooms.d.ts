import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Rooms
 *
 */
export type RoomsModel = runtime.Types.Result.DefaultSelection<Prisma.$RoomsPayload>;
export type AggregateRooms = {
    _count: RoomsCountAggregateOutputType | null;
    _avg: RoomsAvgAggregateOutputType | null;
    _sum: RoomsSumAggregateOutputType | null;
    _min: RoomsMinAggregateOutputType | null;
    _max: RoomsMaxAggregateOutputType | null;
};
export type RoomsAvgAggregateOutputType = {
    id: number | null;
};
export type RoomsSumAggregateOutputType = {
    id: number | null;
};
export type RoomsMinAggregateOutputType = {
    id: number | null;
    roomId: string | null;
    adminId: string | null;
    createdAt: Date | null;
};
export type RoomsMaxAggregateOutputType = {
    id: number | null;
    roomId: string | null;
    adminId: string | null;
    createdAt: Date | null;
};
export type RoomsCountAggregateOutputType = {
    id: number;
    roomId: number;
    adminId: number;
    createdAt: number;
    _all: number;
};
export type RoomsAvgAggregateInputType = {
    id?: true;
};
export type RoomsSumAggregateInputType = {
    id?: true;
};
export type RoomsMinAggregateInputType = {
    id?: true;
    roomId?: true;
    adminId?: true;
    createdAt?: true;
};
export type RoomsMaxAggregateInputType = {
    id?: true;
    roomId?: true;
    adminId?: true;
    createdAt?: true;
};
export type RoomsCountAggregateInputType = {
    id?: true;
    roomId?: true;
    adminId?: true;
    createdAt?: true;
    _all?: true;
};
export type RoomsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Rooms to aggregate.
     */
    where?: Prisma.RoomsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Rooms to fetch.
     */
    orderBy?: Prisma.RoomsOrderByWithRelationInput | Prisma.RoomsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.RoomsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Rooms.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Rooms
    **/
    _count?: true | RoomsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: RoomsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: RoomsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: RoomsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: RoomsMaxAggregateInputType;
};
export type GetRoomsAggregateType<T extends RoomsAggregateArgs> = {
    [P in keyof T & keyof AggregateRooms]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRooms[P]> : Prisma.GetScalarType<T[P], AggregateRooms[P]>;
};
export type RoomsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RoomsWhereInput;
    orderBy?: Prisma.RoomsOrderByWithAggregationInput | Prisma.RoomsOrderByWithAggregationInput[];
    by: Prisma.RoomsScalarFieldEnum[] | Prisma.RoomsScalarFieldEnum;
    having?: Prisma.RoomsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RoomsCountAggregateInputType | true;
    _avg?: RoomsAvgAggregateInputType;
    _sum?: RoomsSumAggregateInputType;
    _min?: RoomsMinAggregateInputType;
    _max?: RoomsMaxAggregateInputType;
};
export type RoomsGroupByOutputType = {
    id: number;
    roomId: string;
    adminId: string;
    createdAt: Date;
    _count: RoomsCountAggregateOutputType | null;
    _avg: RoomsAvgAggregateOutputType | null;
    _sum: RoomsSumAggregateOutputType | null;
    _min: RoomsMinAggregateOutputType | null;
    _max: RoomsMaxAggregateOutputType | null;
};
export type GetRoomsGroupByPayload<T extends RoomsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RoomsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RoomsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RoomsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RoomsGroupByOutputType[P]>;
}>>;
export type RoomsWhereInput = {
    AND?: Prisma.RoomsWhereInput | Prisma.RoomsWhereInput[];
    OR?: Prisma.RoomsWhereInput[];
    NOT?: Prisma.RoomsWhereInput | Prisma.RoomsWhereInput[];
    id?: Prisma.IntFilter<"Rooms"> | number;
    roomId?: Prisma.StringFilter<"Rooms"> | string;
    adminId?: Prisma.StringFilter<"Rooms"> | string;
    createdAt?: Prisma.DateTimeFilter<"Rooms"> | Date | string;
    admin?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.UsersWhereInput>;
    canvas?: Prisma.CanvasListRelationFilter;
};
export type RoomsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    roomId?: Prisma.SortOrder;
    adminId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    admin?: Prisma.UsersOrderByWithRelationInput;
    canvas?: Prisma.CanvasOrderByRelationAggregateInput;
};
export type RoomsWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    roomId?: string;
    AND?: Prisma.RoomsWhereInput | Prisma.RoomsWhereInput[];
    OR?: Prisma.RoomsWhereInput[];
    NOT?: Prisma.RoomsWhereInput | Prisma.RoomsWhereInput[];
    adminId?: Prisma.StringFilter<"Rooms"> | string;
    createdAt?: Prisma.DateTimeFilter<"Rooms"> | Date | string;
    admin?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.UsersWhereInput>;
    canvas?: Prisma.CanvasListRelationFilter;
}, "id" | "roomId">;
export type RoomsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    roomId?: Prisma.SortOrder;
    adminId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.RoomsCountOrderByAggregateInput;
    _avg?: Prisma.RoomsAvgOrderByAggregateInput;
    _max?: Prisma.RoomsMaxOrderByAggregateInput;
    _min?: Prisma.RoomsMinOrderByAggregateInput;
    _sum?: Prisma.RoomsSumOrderByAggregateInput;
};
export type RoomsScalarWhereWithAggregatesInput = {
    AND?: Prisma.RoomsScalarWhereWithAggregatesInput | Prisma.RoomsScalarWhereWithAggregatesInput[];
    OR?: Prisma.RoomsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RoomsScalarWhereWithAggregatesInput | Prisma.RoomsScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Rooms"> | number;
    roomId?: Prisma.StringWithAggregatesFilter<"Rooms"> | string;
    adminId?: Prisma.StringWithAggregatesFilter<"Rooms"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Rooms"> | Date | string;
};
export type RoomsCreateInput = {
    roomId: string;
    createdAt?: Date | string;
    admin: Prisma.UsersCreateNestedOneWithoutRoomsInput;
    canvas?: Prisma.CanvasCreateNestedManyWithoutRoomInput;
};
export type RoomsUncheckedCreateInput = {
    id?: number;
    roomId: string;
    adminId: string;
    createdAt?: Date | string;
    canvas?: Prisma.CanvasUncheckedCreateNestedManyWithoutRoomInput;
};
export type RoomsUpdateInput = {
    roomId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    admin?: Prisma.UsersUpdateOneRequiredWithoutRoomsNestedInput;
    canvas?: Prisma.CanvasUpdateManyWithoutRoomNestedInput;
};
export type RoomsUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    roomId?: Prisma.StringFieldUpdateOperationsInput | string;
    adminId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    canvas?: Prisma.CanvasUncheckedUpdateManyWithoutRoomNestedInput;
};
export type RoomsCreateManyInput = {
    id?: number;
    roomId: string;
    adminId: string;
    createdAt?: Date | string;
};
export type RoomsUpdateManyMutationInput = {
    roomId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RoomsUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    roomId?: Prisma.StringFieldUpdateOperationsInput | string;
    adminId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RoomsListRelationFilter = {
    every?: Prisma.RoomsWhereInput;
    some?: Prisma.RoomsWhereInput;
    none?: Prisma.RoomsWhereInput;
};
export type RoomsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RoomsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    roomId?: Prisma.SortOrder;
    adminId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RoomsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type RoomsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    roomId?: Prisma.SortOrder;
    adminId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RoomsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    roomId?: Prisma.SortOrder;
    adminId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RoomsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type RoomsScalarRelationFilter = {
    is?: Prisma.RoomsWhereInput;
    isNot?: Prisma.RoomsWhereInput;
};
export type RoomsCreateNestedManyWithoutAdminInput = {
    create?: Prisma.XOR<Prisma.RoomsCreateWithoutAdminInput, Prisma.RoomsUncheckedCreateWithoutAdminInput> | Prisma.RoomsCreateWithoutAdminInput[] | Prisma.RoomsUncheckedCreateWithoutAdminInput[];
    connectOrCreate?: Prisma.RoomsCreateOrConnectWithoutAdminInput | Prisma.RoomsCreateOrConnectWithoutAdminInput[];
    createMany?: Prisma.RoomsCreateManyAdminInputEnvelope;
    connect?: Prisma.RoomsWhereUniqueInput | Prisma.RoomsWhereUniqueInput[];
};
export type RoomsUncheckedCreateNestedManyWithoutAdminInput = {
    create?: Prisma.XOR<Prisma.RoomsCreateWithoutAdminInput, Prisma.RoomsUncheckedCreateWithoutAdminInput> | Prisma.RoomsCreateWithoutAdminInput[] | Prisma.RoomsUncheckedCreateWithoutAdminInput[];
    connectOrCreate?: Prisma.RoomsCreateOrConnectWithoutAdminInput | Prisma.RoomsCreateOrConnectWithoutAdminInput[];
    createMany?: Prisma.RoomsCreateManyAdminInputEnvelope;
    connect?: Prisma.RoomsWhereUniqueInput | Prisma.RoomsWhereUniqueInput[];
};
export type RoomsUpdateManyWithoutAdminNestedInput = {
    create?: Prisma.XOR<Prisma.RoomsCreateWithoutAdminInput, Prisma.RoomsUncheckedCreateWithoutAdminInput> | Prisma.RoomsCreateWithoutAdminInput[] | Prisma.RoomsUncheckedCreateWithoutAdminInput[];
    connectOrCreate?: Prisma.RoomsCreateOrConnectWithoutAdminInput | Prisma.RoomsCreateOrConnectWithoutAdminInput[];
    upsert?: Prisma.RoomsUpsertWithWhereUniqueWithoutAdminInput | Prisma.RoomsUpsertWithWhereUniqueWithoutAdminInput[];
    createMany?: Prisma.RoomsCreateManyAdminInputEnvelope;
    set?: Prisma.RoomsWhereUniqueInput | Prisma.RoomsWhereUniqueInput[];
    disconnect?: Prisma.RoomsWhereUniqueInput | Prisma.RoomsWhereUniqueInput[];
    delete?: Prisma.RoomsWhereUniqueInput | Prisma.RoomsWhereUniqueInput[];
    connect?: Prisma.RoomsWhereUniqueInput | Prisma.RoomsWhereUniqueInput[];
    update?: Prisma.RoomsUpdateWithWhereUniqueWithoutAdminInput | Prisma.RoomsUpdateWithWhereUniqueWithoutAdminInput[];
    updateMany?: Prisma.RoomsUpdateManyWithWhereWithoutAdminInput | Prisma.RoomsUpdateManyWithWhereWithoutAdminInput[];
    deleteMany?: Prisma.RoomsScalarWhereInput | Prisma.RoomsScalarWhereInput[];
};
export type RoomsUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: Prisma.XOR<Prisma.RoomsCreateWithoutAdminInput, Prisma.RoomsUncheckedCreateWithoutAdminInput> | Prisma.RoomsCreateWithoutAdminInput[] | Prisma.RoomsUncheckedCreateWithoutAdminInput[];
    connectOrCreate?: Prisma.RoomsCreateOrConnectWithoutAdminInput | Prisma.RoomsCreateOrConnectWithoutAdminInput[];
    upsert?: Prisma.RoomsUpsertWithWhereUniqueWithoutAdminInput | Prisma.RoomsUpsertWithWhereUniqueWithoutAdminInput[];
    createMany?: Prisma.RoomsCreateManyAdminInputEnvelope;
    set?: Prisma.RoomsWhereUniqueInput | Prisma.RoomsWhereUniqueInput[];
    disconnect?: Prisma.RoomsWhereUniqueInput | Prisma.RoomsWhereUniqueInput[];
    delete?: Prisma.RoomsWhereUniqueInput | Prisma.RoomsWhereUniqueInput[];
    connect?: Prisma.RoomsWhereUniqueInput | Prisma.RoomsWhereUniqueInput[];
    update?: Prisma.RoomsUpdateWithWhereUniqueWithoutAdminInput | Prisma.RoomsUpdateWithWhereUniqueWithoutAdminInput[];
    updateMany?: Prisma.RoomsUpdateManyWithWhereWithoutAdminInput | Prisma.RoomsUpdateManyWithWhereWithoutAdminInput[];
    deleteMany?: Prisma.RoomsScalarWhereInput | Prisma.RoomsScalarWhereInput[];
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type RoomsCreateNestedOneWithoutCanvasInput = {
    create?: Prisma.XOR<Prisma.RoomsCreateWithoutCanvasInput, Prisma.RoomsUncheckedCreateWithoutCanvasInput>;
    connectOrCreate?: Prisma.RoomsCreateOrConnectWithoutCanvasInput;
    connect?: Prisma.RoomsWhereUniqueInput;
};
export type RoomsUpdateOneRequiredWithoutCanvasNestedInput = {
    create?: Prisma.XOR<Prisma.RoomsCreateWithoutCanvasInput, Prisma.RoomsUncheckedCreateWithoutCanvasInput>;
    connectOrCreate?: Prisma.RoomsCreateOrConnectWithoutCanvasInput;
    upsert?: Prisma.RoomsUpsertWithoutCanvasInput;
    connect?: Prisma.RoomsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RoomsUpdateToOneWithWhereWithoutCanvasInput, Prisma.RoomsUpdateWithoutCanvasInput>, Prisma.RoomsUncheckedUpdateWithoutCanvasInput>;
};
export type RoomsCreateWithoutAdminInput = {
    roomId: string;
    createdAt?: Date | string;
    canvas?: Prisma.CanvasCreateNestedManyWithoutRoomInput;
};
export type RoomsUncheckedCreateWithoutAdminInput = {
    id?: number;
    roomId: string;
    createdAt?: Date | string;
    canvas?: Prisma.CanvasUncheckedCreateNestedManyWithoutRoomInput;
};
export type RoomsCreateOrConnectWithoutAdminInput = {
    where: Prisma.RoomsWhereUniqueInput;
    create: Prisma.XOR<Prisma.RoomsCreateWithoutAdminInput, Prisma.RoomsUncheckedCreateWithoutAdminInput>;
};
export type RoomsCreateManyAdminInputEnvelope = {
    data: Prisma.RoomsCreateManyAdminInput | Prisma.RoomsCreateManyAdminInput[];
    skipDuplicates?: boolean;
};
export type RoomsUpsertWithWhereUniqueWithoutAdminInput = {
    where: Prisma.RoomsWhereUniqueInput;
    update: Prisma.XOR<Prisma.RoomsUpdateWithoutAdminInput, Prisma.RoomsUncheckedUpdateWithoutAdminInput>;
    create: Prisma.XOR<Prisma.RoomsCreateWithoutAdminInput, Prisma.RoomsUncheckedCreateWithoutAdminInput>;
};
export type RoomsUpdateWithWhereUniqueWithoutAdminInput = {
    where: Prisma.RoomsWhereUniqueInput;
    data: Prisma.XOR<Prisma.RoomsUpdateWithoutAdminInput, Prisma.RoomsUncheckedUpdateWithoutAdminInput>;
};
export type RoomsUpdateManyWithWhereWithoutAdminInput = {
    where: Prisma.RoomsScalarWhereInput;
    data: Prisma.XOR<Prisma.RoomsUpdateManyMutationInput, Prisma.RoomsUncheckedUpdateManyWithoutAdminInput>;
};
export type RoomsScalarWhereInput = {
    AND?: Prisma.RoomsScalarWhereInput | Prisma.RoomsScalarWhereInput[];
    OR?: Prisma.RoomsScalarWhereInput[];
    NOT?: Prisma.RoomsScalarWhereInput | Prisma.RoomsScalarWhereInput[];
    id?: Prisma.IntFilter<"Rooms"> | number;
    roomId?: Prisma.StringFilter<"Rooms"> | string;
    adminId?: Prisma.StringFilter<"Rooms"> | string;
    createdAt?: Prisma.DateTimeFilter<"Rooms"> | Date | string;
};
export type RoomsCreateWithoutCanvasInput = {
    roomId: string;
    createdAt?: Date | string;
    admin: Prisma.UsersCreateNestedOneWithoutRoomsInput;
};
export type RoomsUncheckedCreateWithoutCanvasInput = {
    id?: number;
    roomId: string;
    adminId: string;
    createdAt?: Date | string;
};
export type RoomsCreateOrConnectWithoutCanvasInput = {
    where: Prisma.RoomsWhereUniqueInput;
    create: Prisma.XOR<Prisma.RoomsCreateWithoutCanvasInput, Prisma.RoomsUncheckedCreateWithoutCanvasInput>;
};
export type RoomsUpsertWithoutCanvasInput = {
    update: Prisma.XOR<Prisma.RoomsUpdateWithoutCanvasInput, Prisma.RoomsUncheckedUpdateWithoutCanvasInput>;
    create: Prisma.XOR<Prisma.RoomsCreateWithoutCanvasInput, Prisma.RoomsUncheckedCreateWithoutCanvasInput>;
    where?: Prisma.RoomsWhereInput;
};
export type RoomsUpdateToOneWithWhereWithoutCanvasInput = {
    where?: Prisma.RoomsWhereInput;
    data: Prisma.XOR<Prisma.RoomsUpdateWithoutCanvasInput, Prisma.RoomsUncheckedUpdateWithoutCanvasInput>;
};
export type RoomsUpdateWithoutCanvasInput = {
    roomId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    admin?: Prisma.UsersUpdateOneRequiredWithoutRoomsNestedInput;
};
export type RoomsUncheckedUpdateWithoutCanvasInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    roomId?: Prisma.StringFieldUpdateOperationsInput | string;
    adminId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RoomsCreateManyAdminInput = {
    id?: number;
    roomId: string;
    createdAt?: Date | string;
};
export type RoomsUpdateWithoutAdminInput = {
    roomId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    canvas?: Prisma.CanvasUpdateManyWithoutRoomNestedInput;
};
export type RoomsUncheckedUpdateWithoutAdminInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    roomId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    canvas?: Prisma.CanvasUncheckedUpdateManyWithoutRoomNestedInput;
};
export type RoomsUncheckedUpdateManyWithoutAdminInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    roomId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type RoomsCountOutputType
 */
export type RoomsCountOutputType = {
    canvas: number;
};
export type RoomsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    canvas?: boolean | RoomsCountOutputTypeCountCanvasArgs;
};
/**
 * RoomsCountOutputType without action
 */
export type RoomsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomsCountOutputType
     */
    select?: Prisma.RoomsCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * RoomsCountOutputType without action
 */
export type RoomsCountOutputTypeCountCanvasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CanvasWhereInput;
};
export type RoomsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    roomId?: boolean;
    adminId?: boolean;
    createdAt?: boolean;
    admin?: boolean | Prisma.UsersDefaultArgs<ExtArgs>;
    canvas?: boolean | Prisma.Rooms$canvasArgs<ExtArgs>;
    _count?: boolean | Prisma.RoomsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rooms"]>;
export type RoomsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    roomId?: boolean;
    adminId?: boolean;
    createdAt?: boolean;
    admin?: boolean | Prisma.UsersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rooms"]>;
export type RoomsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    roomId?: boolean;
    adminId?: boolean;
    createdAt?: boolean;
    admin?: boolean | Prisma.UsersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rooms"]>;
export type RoomsSelectScalar = {
    id?: boolean;
    roomId?: boolean;
    adminId?: boolean;
    createdAt?: boolean;
};
export type RoomsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "roomId" | "adminId" | "createdAt", ExtArgs["result"]["rooms"]>;
export type RoomsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    admin?: boolean | Prisma.UsersDefaultArgs<ExtArgs>;
    canvas?: boolean | Prisma.Rooms$canvasArgs<ExtArgs>;
    _count?: boolean | Prisma.RoomsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type RoomsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    admin?: boolean | Prisma.UsersDefaultArgs<ExtArgs>;
};
export type RoomsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    admin?: boolean | Prisma.UsersDefaultArgs<ExtArgs>;
};
export type $RoomsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Rooms";
    objects: {
        admin: Prisma.$UsersPayload<ExtArgs>;
        canvas: Prisma.$CanvasPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        roomId: string;
        adminId: string;
        createdAt: Date;
    }, ExtArgs["result"]["rooms"]>;
    composites: {};
};
export type RoomsGetPayload<S extends boolean | null | undefined | RoomsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RoomsPayload, S>;
export type RoomsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RoomsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RoomsCountAggregateInputType | true;
};
export interface RoomsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Rooms'];
        meta: {
            name: 'Rooms';
        };
    };
    /**
     * Find zero or one Rooms that matches the filter.
     * @param {RoomsFindUniqueArgs} args - Arguments to find a Rooms
     * @example
     * // Get one Rooms
     * const rooms = await prisma.rooms.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomsFindUniqueArgs>(args: Prisma.SelectSubset<T, RoomsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RoomsClient<runtime.Types.Result.GetResult<Prisma.$RoomsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Rooms that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomsFindUniqueOrThrowArgs} args - Arguments to find a Rooms
     * @example
     * // Get one Rooms
     * const rooms = await prisma.rooms.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RoomsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RoomsClient<runtime.Types.Result.GetResult<Prisma.$RoomsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomsFindFirstArgs} args - Arguments to find a Rooms
     * @example
     * // Get one Rooms
     * const rooms = await prisma.rooms.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomsFindFirstArgs>(args?: Prisma.SelectSubset<T, RoomsFindFirstArgs<ExtArgs>>): Prisma.Prisma__RoomsClient<runtime.Types.Result.GetResult<Prisma.$RoomsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Rooms that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomsFindFirstOrThrowArgs} args - Arguments to find a Rooms
     * @example
     * // Get one Rooms
     * const rooms = await prisma.rooms.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RoomsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RoomsClient<runtime.Types.Result.GetResult<Prisma.$RoomsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.rooms.findMany()
     *
     * // Get first 10 Rooms
     * const rooms = await prisma.rooms.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const roomsWithIdOnly = await prisma.rooms.findMany({ select: { id: true } })
     *
     */
    findMany<T extends RoomsFindManyArgs>(args?: Prisma.SelectSubset<T, RoomsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RoomsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Rooms.
     * @param {RoomsCreateArgs} args - Arguments to create a Rooms.
     * @example
     * // Create one Rooms
     * const Rooms = await prisma.rooms.create({
     *   data: {
     *     // ... data to create a Rooms
     *   }
     * })
     *
     */
    create<T extends RoomsCreateArgs>(args: Prisma.SelectSubset<T, RoomsCreateArgs<ExtArgs>>): Prisma.Prisma__RoomsClient<runtime.Types.Result.GetResult<Prisma.$RoomsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Rooms.
     * @param {RoomsCreateManyArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const rooms = await prisma.rooms.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends RoomsCreateManyArgs>(args?: Prisma.SelectSubset<T, RoomsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Rooms and returns the data saved in the database.
     * @param {RoomsCreateManyAndReturnArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const rooms = await prisma.rooms.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Rooms and only return the `id`
     * const roomsWithIdOnly = await prisma.rooms.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends RoomsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RoomsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RoomsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Rooms.
     * @param {RoomsDeleteArgs} args - Arguments to delete one Rooms.
     * @example
     * // Delete one Rooms
     * const Rooms = await prisma.rooms.delete({
     *   where: {
     *     // ... filter to delete one Rooms
     *   }
     * })
     *
     */
    delete<T extends RoomsDeleteArgs>(args: Prisma.SelectSubset<T, RoomsDeleteArgs<ExtArgs>>): Prisma.Prisma__RoomsClient<runtime.Types.Result.GetResult<Prisma.$RoomsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Rooms.
     * @param {RoomsUpdateArgs} args - Arguments to update one Rooms.
     * @example
     * // Update one Rooms
     * const rooms = await prisma.rooms.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends RoomsUpdateArgs>(args: Prisma.SelectSubset<T, RoomsUpdateArgs<ExtArgs>>): Prisma.Prisma__RoomsClient<runtime.Types.Result.GetResult<Prisma.$RoomsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Rooms.
     * @param {RoomsDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.rooms.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends RoomsDeleteManyArgs>(args?: Prisma.SelectSubset<T, RoomsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const rooms = await prisma.rooms.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends RoomsUpdateManyArgs>(args: Prisma.SelectSubset<T, RoomsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Rooms and returns the data updated in the database.
     * @param {RoomsUpdateManyAndReturnArgs} args - Arguments to update many Rooms.
     * @example
     * // Update many Rooms
     * const rooms = await prisma.rooms.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Rooms and only return the `id`
     * const roomsWithIdOnly = await prisma.rooms.updateManyAndReturn({
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
    updateManyAndReturn<T extends RoomsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RoomsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RoomsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Rooms.
     * @param {RoomsUpsertArgs} args - Arguments to update or create a Rooms.
     * @example
     * // Update or create a Rooms
     * const rooms = await prisma.rooms.upsert({
     *   create: {
     *     // ... data to create a Rooms
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rooms we want to update
     *   }
     * })
     */
    upsert<T extends RoomsUpsertArgs>(args: Prisma.SelectSubset<T, RoomsUpsertArgs<ExtArgs>>): Prisma.Prisma__RoomsClient<runtime.Types.Result.GetResult<Prisma.$RoomsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomsCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.rooms.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends RoomsCountArgs>(args?: Prisma.Subset<T, RoomsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RoomsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoomsAggregateArgs>(args: Prisma.Subset<T, RoomsAggregateArgs>): Prisma.PrismaPromise<GetRoomsAggregateType<T>>;
    /**
     * Group by Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomsGroupByArgs} args - Group by arguments.
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
    groupBy<T extends RoomsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RoomsGroupByArgs['orderBy'];
    } : {
        orderBy?: RoomsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RoomsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Rooms model
     */
    readonly fields: RoomsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Rooms.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__RoomsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    admin<T extends Prisma.UsersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UsersDefaultArgs<ExtArgs>>): Prisma.Prisma__UsersClient<runtime.Types.Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    canvas<T extends Prisma.Rooms$canvasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Rooms$canvasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CanvasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Rooms model
 */
export interface RoomsFieldRefs {
    readonly id: Prisma.FieldRef<"Rooms", 'Int'>;
    readonly roomId: Prisma.FieldRef<"Rooms", 'String'>;
    readonly adminId: Prisma.FieldRef<"Rooms", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Rooms", 'DateTime'>;
}
/**
 * Rooms findUnique
 */
export type RoomsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rooms
     */
    select?: Prisma.RoomsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Rooms
     */
    omit?: Prisma.RoomsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RoomsInclude<ExtArgs> | null;
    /**
     * Filter, which Rooms to fetch.
     */
    where: Prisma.RoomsWhereUniqueInput;
};
/**
 * Rooms findUniqueOrThrow
 */
export type RoomsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rooms
     */
    select?: Prisma.RoomsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Rooms
     */
    omit?: Prisma.RoomsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RoomsInclude<ExtArgs> | null;
    /**
     * Filter, which Rooms to fetch.
     */
    where: Prisma.RoomsWhereUniqueInput;
};
/**
 * Rooms findFirst
 */
export type RoomsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rooms
     */
    select?: Prisma.RoomsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Rooms
     */
    omit?: Prisma.RoomsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RoomsInclude<ExtArgs> | null;
    /**
     * Filter, which Rooms to fetch.
     */
    where?: Prisma.RoomsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Rooms to fetch.
     */
    orderBy?: Prisma.RoomsOrderByWithRelationInput | Prisma.RoomsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Rooms.
     */
    cursor?: Prisma.RoomsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Rooms.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Rooms.
     */
    distinct?: Prisma.RoomsScalarFieldEnum | Prisma.RoomsScalarFieldEnum[];
};
/**
 * Rooms findFirstOrThrow
 */
export type RoomsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rooms
     */
    select?: Prisma.RoomsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Rooms
     */
    omit?: Prisma.RoomsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RoomsInclude<ExtArgs> | null;
    /**
     * Filter, which Rooms to fetch.
     */
    where?: Prisma.RoomsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Rooms to fetch.
     */
    orderBy?: Prisma.RoomsOrderByWithRelationInput | Prisma.RoomsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Rooms.
     */
    cursor?: Prisma.RoomsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Rooms.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Rooms.
     */
    distinct?: Prisma.RoomsScalarFieldEnum | Prisma.RoomsScalarFieldEnum[];
};
/**
 * Rooms findMany
 */
export type RoomsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rooms
     */
    select?: Prisma.RoomsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Rooms
     */
    omit?: Prisma.RoomsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RoomsInclude<ExtArgs> | null;
    /**
     * Filter, which Rooms to fetch.
     */
    where?: Prisma.RoomsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Rooms to fetch.
     */
    orderBy?: Prisma.RoomsOrderByWithRelationInput | Prisma.RoomsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Rooms.
     */
    cursor?: Prisma.RoomsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Rooms.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Rooms.
     */
    distinct?: Prisma.RoomsScalarFieldEnum | Prisma.RoomsScalarFieldEnum[];
};
/**
 * Rooms create
 */
export type RoomsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rooms
     */
    select?: Prisma.RoomsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Rooms
     */
    omit?: Prisma.RoomsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RoomsInclude<ExtArgs> | null;
    /**
     * The data needed to create a Rooms.
     */
    data: Prisma.XOR<Prisma.RoomsCreateInput, Prisma.RoomsUncheckedCreateInput>;
};
/**
 * Rooms createMany
 */
export type RoomsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rooms.
     */
    data: Prisma.RoomsCreateManyInput | Prisma.RoomsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Rooms createManyAndReturn
 */
export type RoomsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rooms
     */
    select?: Prisma.RoomsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Rooms
     */
    omit?: Prisma.RoomsOmit<ExtArgs> | null;
    /**
     * The data used to create many Rooms.
     */
    data: Prisma.RoomsCreateManyInput | Prisma.RoomsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RoomsIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Rooms update
 */
export type RoomsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rooms
     */
    select?: Prisma.RoomsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Rooms
     */
    omit?: Prisma.RoomsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RoomsInclude<ExtArgs> | null;
    /**
     * The data needed to update a Rooms.
     */
    data: Prisma.XOR<Prisma.RoomsUpdateInput, Prisma.RoomsUncheckedUpdateInput>;
    /**
     * Choose, which Rooms to update.
     */
    where: Prisma.RoomsWhereUniqueInput;
};
/**
 * Rooms updateMany
 */
export type RoomsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Rooms.
     */
    data: Prisma.XOR<Prisma.RoomsUpdateManyMutationInput, Prisma.RoomsUncheckedUpdateManyInput>;
    /**
     * Filter which Rooms to update
     */
    where?: Prisma.RoomsWhereInput;
    /**
     * Limit how many Rooms to update.
     */
    limit?: number;
};
/**
 * Rooms updateManyAndReturn
 */
export type RoomsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rooms
     */
    select?: Prisma.RoomsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Rooms
     */
    omit?: Prisma.RoomsOmit<ExtArgs> | null;
    /**
     * The data used to update Rooms.
     */
    data: Prisma.XOR<Prisma.RoomsUpdateManyMutationInput, Prisma.RoomsUncheckedUpdateManyInput>;
    /**
     * Filter which Rooms to update
     */
    where?: Prisma.RoomsWhereInput;
    /**
     * Limit how many Rooms to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RoomsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Rooms upsert
 */
export type RoomsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rooms
     */
    select?: Prisma.RoomsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Rooms
     */
    omit?: Prisma.RoomsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RoomsInclude<ExtArgs> | null;
    /**
     * The filter to search for the Rooms to update in case it exists.
     */
    where: Prisma.RoomsWhereUniqueInput;
    /**
     * In case the Rooms found by the `where` argument doesn't exist, create a new Rooms with this data.
     */
    create: Prisma.XOR<Prisma.RoomsCreateInput, Prisma.RoomsUncheckedCreateInput>;
    /**
     * In case the Rooms was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.RoomsUpdateInput, Prisma.RoomsUncheckedUpdateInput>;
};
/**
 * Rooms delete
 */
export type RoomsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rooms
     */
    select?: Prisma.RoomsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Rooms
     */
    omit?: Prisma.RoomsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RoomsInclude<ExtArgs> | null;
    /**
     * Filter which Rooms to delete.
     */
    where: Prisma.RoomsWhereUniqueInput;
};
/**
 * Rooms deleteMany
 */
export type RoomsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Rooms to delete
     */
    where?: Prisma.RoomsWhereInput;
    /**
     * Limit how many Rooms to delete.
     */
    limit?: number;
};
/**
 * Rooms.canvas
 */
export type Rooms$canvasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.CanvasWhereInput;
    orderBy?: Prisma.CanvasOrderByWithRelationInput | Prisma.CanvasOrderByWithRelationInput[];
    cursor?: Prisma.CanvasWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CanvasScalarFieldEnum | Prisma.CanvasScalarFieldEnum[];
};
/**
 * Rooms without action
 */
export type RoomsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rooms
     */
    select?: Prisma.RoomsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Rooms
     */
    omit?: Prisma.RoomsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RoomsInclude<ExtArgs> | null;
};
//# sourceMappingURL=Rooms.d.ts.map