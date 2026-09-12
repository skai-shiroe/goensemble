
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Vehicle
 * 
 */
export type Vehicle = $Result.DefaultSelection<Prisma.$VehiclePayload>
/**
 * Model Trip
 * 
 */
export type Trip = $Result.DefaultSelection<Prisma.$TripPayload>
/**
 * Model Waypoint
 * 
 */
export type Waypoint = $Result.DefaultSelection<Prisma.$WaypointPayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>
/**
 * Model Rating
 * 
 */
export type Rating = $Result.DefaultSelection<Prisma.$RatingPayload>
/**
 * Model Device
 * 
 */
export type Device = $Result.DefaultSelection<Prisma.$DevicePayload>
/**
 * Model Report
 * 
 */
export type Report = $Result.DefaultSelection<Prisma.$ReportPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TripStatus: {
  ACTIVE: 'ACTIVE',
  CANCELLED: 'CANCELLED',
  COMPLETED: 'COMPLETED'
};

export type TripStatus = (typeof TripStatus)[keyof typeof TripStatus]


export const BookingStatus: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED',
  CANCELLED: 'CANCELLED',
  COMPLETED: 'COMPLETED'
};

export type BookingStatus = (typeof BookingStatus)[keyof typeof BookingStatus]


export const ReportStatus: {
  OPEN: 'OPEN',
  RESOLVED: 'RESOLVED',
  DISMISSED: 'DISMISSED'
};

export type ReportStatus = (typeof ReportStatus)[keyof typeof ReportStatus]

}

export type TripStatus = $Enums.TripStatus

export const TripStatus: typeof $Enums.TripStatus

export type BookingStatus = $Enums.BookingStatus

export const BookingStatus: typeof $Enums.BookingStatus

export type ReportStatus = $Enums.ReportStatus

export const ReportStatus: typeof $Enums.ReportStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vehicle`: Exposes CRUD operations for the **Vehicle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehicles
    * const vehicles = await prisma.vehicle.findMany()
    * ```
    */
  get vehicle(): Prisma.VehicleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trip`: Exposes CRUD operations for the **Trip** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trips
    * const trips = await prisma.trip.findMany()
    * ```
    */
  get trip(): Prisma.TripDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.waypoint`: Exposes CRUD operations for the **Waypoint** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Waypoints
    * const waypoints = await prisma.waypoint.findMany()
    * ```
    */
  get waypoint(): Prisma.WaypointDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rating`: Exposes CRUD operations for the **Rating** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ratings
    * const ratings = await prisma.rating.findMany()
    * ```
    */
  get rating(): Prisma.RatingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.device`: Exposes CRUD operations for the **Device** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Devices
    * const devices = await prisma.device.findMany()
    * ```
    */
  get device(): Prisma.DeviceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.report`: Exposes CRUD operations for the **Report** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reports
    * const reports = await prisma.report.findMany()
    * ```
    */
  get report(): Prisma.ReportDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Vehicle: 'Vehicle',
    Trip: 'Trip',
    Waypoint: 'Waypoint',
    Booking: 'Booking',
    Rating: 'Rating',
    Device: 'Device',
    Report: 'Report'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "vehicle" | "trip" | "waypoint" | "booking" | "rating" | "device" | "report"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Vehicle: {
        payload: Prisma.$VehiclePayload<ExtArgs>
        fields: Prisma.VehicleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehicleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehicleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findFirst: {
            args: Prisma.VehicleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehicleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findMany: {
            args: Prisma.VehicleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          create: {
            args: Prisma.VehicleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          createMany: {
            args: Prisma.VehicleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VehicleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          delete: {
            args: Prisma.VehicleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          update: {
            args: Prisma.VehicleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          deleteMany: {
            args: Prisma.VehicleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehicleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VehicleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          upsert: {
            args: Prisma.VehicleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          aggregate: {
            args: Prisma.VehicleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicle>
          }
          groupBy: {
            args: Prisma.VehicleGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehicleGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehicleCountArgs<ExtArgs>
            result: $Utils.Optional<VehicleCountAggregateOutputType> | number
          }
        }
      }
      Trip: {
        payload: Prisma.$TripPayload<ExtArgs>
        fields: Prisma.TripFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TripFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TripFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          findFirst: {
            args: Prisma.TripFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TripFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          findMany: {
            args: Prisma.TripFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>[]
          }
          create: {
            args: Prisma.TripCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          createMany: {
            args: Prisma.TripCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TripCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>[]
          }
          delete: {
            args: Prisma.TripDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          update: {
            args: Prisma.TripUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          deleteMany: {
            args: Prisma.TripDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TripUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TripUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>[]
          }
          upsert: {
            args: Prisma.TripUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          aggregate: {
            args: Prisma.TripAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrip>
          }
          groupBy: {
            args: Prisma.TripGroupByArgs<ExtArgs>
            result: $Utils.Optional<TripGroupByOutputType>[]
          }
          count: {
            args: Prisma.TripCountArgs<ExtArgs>
            result: $Utils.Optional<TripCountAggregateOutputType> | number
          }
        }
      }
      Waypoint: {
        payload: Prisma.$WaypointPayload<ExtArgs>
        fields: Prisma.WaypointFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WaypointFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaypointPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WaypointFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaypointPayload>
          }
          findFirst: {
            args: Prisma.WaypointFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaypointPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WaypointFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaypointPayload>
          }
          findMany: {
            args: Prisma.WaypointFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaypointPayload>[]
          }
          create: {
            args: Prisma.WaypointCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaypointPayload>
          }
          createMany: {
            args: Prisma.WaypointCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WaypointCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaypointPayload>[]
          }
          delete: {
            args: Prisma.WaypointDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaypointPayload>
          }
          update: {
            args: Prisma.WaypointUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaypointPayload>
          }
          deleteMany: {
            args: Prisma.WaypointDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WaypointUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WaypointUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaypointPayload>[]
          }
          upsert: {
            args: Prisma.WaypointUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaypointPayload>
          }
          aggregate: {
            args: Prisma.WaypointAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWaypoint>
          }
          groupBy: {
            args: Prisma.WaypointGroupByArgs<ExtArgs>
            result: $Utils.Optional<WaypointGroupByOutputType>[]
          }
          count: {
            args: Prisma.WaypointCountArgs<ExtArgs>
            result: $Utils.Optional<WaypointCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
      Rating: {
        payload: Prisma.$RatingPayload<ExtArgs>
        fields: Prisma.RatingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RatingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RatingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          findFirst: {
            args: Prisma.RatingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RatingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          findMany: {
            args: Prisma.RatingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>[]
          }
          create: {
            args: Prisma.RatingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          createMany: {
            args: Prisma.RatingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RatingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>[]
          }
          delete: {
            args: Prisma.RatingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          update: {
            args: Prisma.RatingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          deleteMany: {
            args: Prisma.RatingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RatingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RatingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>[]
          }
          upsert: {
            args: Prisma.RatingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          aggregate: {
            args: Prisma.RatingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRating>
          }
          groupBy: {
            args: Prisma.RatingGroupByArgs<ExtArgs>
            result: $Utils.Optional<RatingGroupByOutputType>[]
          }
          count: {
            args: Prisma.RatingCountArgs<ExtArgs>
            result: $Utils.Optional<RatingCountAggregateOutputType> | number
          }
        }
      }
      Device: {
        payload: Prisma.$DevicePayload<ExtArgs>
        fields: Prisma.DeviceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeviceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeviceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          findFirst: {
            args: Prisma.DeviceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeviceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          findMany: {
            args: Prisma.DeviceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          create: {
            args: Prisma.DeviceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          createMany: {
            args: Prisma.DeviceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeviceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          delete: {
            args: Prisma.DeviceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          update: {
            args: Prisma.DeviceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          deleteMany: {
            args: Prisma.DeviceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeviceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeviceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          upsert: {
            args: Prisma.DeviceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          aggregate: {
            args: Prisma.DeviceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDevice>
          }
          groupBy: {
            args: Prisma.DeviceGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeviceGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeviceCountArgs<ExtArgs>
            result: $Utils.Optional<DeviceCountAggregateOutputType> | number
          }
        }
      }
      Report: {
        payload: Prisma.$ReportPayload<ExtArgs>
        fields: Prisma.ReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findFirst: {
            args: Prisma.ReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findMany: {
            args: Prisma.ReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          create: {
            args: Prisma.ReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          createMany: {
            args: Prisma.ReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          delete: {
            args: Prisma.ReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          update: {
            args: Prisma.ReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          deleteMany: {
            args: Prisma.ReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          upsert: {
            args: Prisma.ReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          aggregate: {
            args: Prisma.ReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReport>
          }
          groupBy: {
            args: Prisma.ReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReportCountArgs<ExtArgs>
            result: $Utils.Optional<ReportCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    vehicle?: VehicleOmit
    trip?: TripOmit
    waypoint?: WaypointOmit
    booking?: BookingOmit
    rating?: RatingOmit
    device?: DeviceOmit
    report?: ReportOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    vehicles: number
    tripsDriven: number
    tripsBooked: number
    ratingsGiven: number
    ratingsReceived: number
    reportsMade: number
    reportsReceived: number
    devices: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicles?: boolean | UserCountOutputTypeCountVehiclesArgs
    tripsDriven?: boolean | UserCountOutputTypeCountTripsDrivenArgs
    tripsBooked?: boolean | UserCountOutputTypeCountTripsBookedArgs
    ratingsGiven?: boolean | UserCountOutputTypeCountRatingsGivenArgs
    ratingsReceived?: boolean | UserCountOutputTypeCountRatingsReceivedArgs
    reportsMade?: boolean | UserCountOutputTypeCountReportsMadeArgs
    reportsReceived?: boolean | UserCountOutputTypeCountReportsReceivedArgs
    devices?: boolean | UserCountOutputTypeCountDevicesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVehiclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTripsDrivenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTripsBookedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRatingsGivenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRatingsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReportsMadeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReportsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDevicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceWhereInput
  }


  /**
   * Count Type VehicleCountOutputType
   */

  export type VehicleCountOutputType = {
    trips: number
  }

  export type VehicleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trips?: boolean | VehicleCountOutputTypeCountTripsArgs
  }

  // Custom InputTypes
  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleCountOutputType
     */
    select?: VehicleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountTripsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripWhereInput
  }


  /**
   * Count Type TripCountOutputType
   */

  export type TripCountOutputType = {
    waypoints: number
    bookings: number
  }

  export type TripCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    waypoints?: boolean | TripCountOutputTypeCountWaypointsArgs
    bookings?: boolean | TripCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripCountOutputType
     */
    select?: TripCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeCountWaypointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WaypointWhereInput
  }

  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    rating: number | null
    tripsCount: number | null
  }

  export type UserSumAggregateOutputType = {
    rating: number | null
    tripsCount: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    phone: string | null
    fullName: string | null
    photoUrl: string | null
    rating: number | null
    tripsCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    phone: string | null
    fullName: string | null
    photoUrl: string | null
    rating: number | null
    tripsCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    phone: number
    fullName: number
    photoUrl: number
    rating: number
    tripsCount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    rating?: true
    tripsCount?: true
  }

  export type UserSumAggregateInputType = {
    rating?: true
    tripsCount?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    phone?: true
    fullName?: true
    photoUrl?: true
    rating?: true
    tripsCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    phone?: true
    fullName?: true
    photoUrl?: true
    rating?: true
    tripsCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    phone?: true
    fullName?: true
    photoUrl?: true
    rating?: true
    tripsCount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    phone: string
    fullName: string | null
    photoUrl: string | null
    rating: number
    tripsCount: number
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    fullName?: boolean
    photoUrl?: boolean
    rating?: boolean
    tripsCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehicles?: boolean | User$vehiclesArgs<ExtArgs>
    tripsDriven?: boolean | User$tripsDrivenArgs<ExtArgs>
    tripsBooked?: boolean | User$tripsBookedArgs<ExtArgs>
    ratingsGiven?: boolean | User$ratingsGivenArgs<ExtArgs>
    ratingsReceived?: boolean | User$ratingsReceivedArgs<ExtArgs>
    reportsMade?: boolean | User$reportsMadeArgs<ExtArgs>
    reportsReceived?: boolean | User$reportsReceivedArgs<ExtArgs>
    devices?: boolean | User$devicesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    fullName?: boolean
    photoUrl?: boolean
    rating?: boolean
    tripsCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    fullName?: boolean
    photoUrl?: boolean
    rating?: boolean
    tripsCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    phone?: boolean
    fullName?: boolean
    photoUrl?: boolean
    rating?: boolean
    tripsCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "phone" | "fullName" | "photoUrl" | "rating" | "tripsCount" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicles?: boolean | User$vehiclesArgs<ExtArgs>
    tripsDriven?: boolean | User$tripsDrivenArgs<ExtArgs>
    tripsBooked?: boolean | User$tripsBookedArgs<ExtArgs>
    ratingsGiven?: boolean | User$ratingsGivenArgs<ExtArgs>
    ratingsReceived?: boolean | User$ratingsReceivedArgs<ExtArgs>
    reportsMade?: boolean | User$reportsMadeArgs<ExtArgs>
    reportsReceived?: boolean | User$reportsReceivedArgs<ExtArgs>
    devices?: boolean | User$devicesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      vehicles: Prisma.$VehiclePayload<ExtArgs>[]
      tripsDriven: Prisma.$TripPayload<ExtArgs>[]
      tripsBooked: Prisma.$BookingPayload<ExtArgs>[]
      ratingsGiven: Prisma.$RatingPayload<ExtArgs>[]
      ratingsReceived: Prisma.$RatingPayload<ExtArgs>[]
      reportsMade: Prisma.$ReportPayload<ExtArgs>[]
      reportsReceived: Prisma.$ReportPayload<ExtArgs>[]
      devices: Prisma.$DevicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      phone: string
      fullName: string | null
      photoUrl: string | null
      rating: number
      tripsCount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicles<T extends User$vehiclesArgs<ExtArgs> = {}>(args?: Subset<T, User$vehiclesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tripsDriven<T extends User$tripsDrivenArgs<ExtArgs> = {}>(args?: Subset<T, User$tripsDrivenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tripsBooked<T extends User$tripsBookedArgs<ExtArgs> = {}>(args?: Subset<T, User$tripsBookedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ratingsGiven<T extends User$ratingsGivenArgs<ExtArgs> = {}>(args?: Subset<T, User$ratingsGivenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ratingsReceived<T extends User$ratingsReceivedArgs<ExtArgs> = {}>(args?: Subset<T, User$ratingsReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reportsMade<T extends User$reportsMadeArgs<ExtArgs> = {}>(args?: Subset<T, User$reportsMadeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reportsReceived<T extends User$reportsReceivedArgs<ExtArgs> = {}>(args?: Subset<T, User$reportsReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    devices<T extends User$devicesArgs<ExtArgs> = {}>(args?: Subset<T, User$devicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly photoUrl: FieldRef<"User", 'String'>
    readonly rating: FieldRef<"User", 'Float'>
    readonly tripsCount: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.vehicles
   */
  export type User$vehiclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    where?: VehicleWhereInput
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    cursor?: VehicleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * User.tripsDriven
   */
  export type User$tripsDrivenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    where?: TripWhereInput
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    cursor?: TripWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * User.tripsBooked
   */
  export type User$tripsBookedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * User.ratingsGiven
   */
  export type User$ratingsGivenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    where?: RatingWhereInput
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    cursor?: RatingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * User.ratingsReceived
   */
  export type User$ratingsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    where?: RatingWhereInput
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    cursor?: RatingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * User.reportsMade
   */
  export type User$reportsMadeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    cursor?: ReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * User.reportsReceived
   */
  export type User$reportsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    cursor?: ReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * User.devices
   */
  export type User$devicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    where?: DeviceWhereInput
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    cursor?: DeviceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Vehicle
   */

  export type AggregateVehicle = {
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  export type VehicleAvgAggregateOutputType = {
    seats: number | null
  }

  export type VehicleSumAggregateOutputType = {
    seats: number | null
  }

  export type VehicleMinAggregateOutputType = {
    id: string | null
    ownerId: string | null
    model: string | null
    plate: string | null
    color: string | null
    seats: number | null
    createdAt: Date | null
  }

  export type VehicleMaxAggregateOutputType = {
    id: string | null
    ownerId: string | null
    model: string | null
    plate: string | null
    color: string | null
    seats: number | null
    createdAt: Date | null
  }

  export type VehicleCountAggregateOutputType = {
    id: number
    ownerId: number
    model: number
    plate: number
    color: number
    seats: number
    createdAt: number
    _all: number
  }


  export type VehicleAvgAggregateInputType = {
    seats?: true
  }

  export type VehicleSumAggregateInputType = {
    seats?: true
  }

  export type VehicleMinAggregateInputType = {
    id?: true
    ownerId?: true
    model?: true
    plate?: true
    color?: true
    seats?: true
    createdAt?: true
  }

  export type VehicleMaxAggregateInputType = {
    id?: true
    ownerId?: true
    model?: true
    plate?: true
    color?: true
    seats?: true
    createdAt?: true
  }

  export type VehicleCountAggregateInputType = {
    id?: true
    ownerId?: true
    model?: true
    plate?: true
    color?: true
    seats?: true
    createdAt?: true
    _all?: true
  }

  export type VehicleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicle to aggregate.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vehicles
    **/
    _count?: true | VehicleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VehicleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VehicleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehicleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehicleMaxAggregateInputType
  }

  export type GetVehicleAggregateType<T extends VehicleAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicle[P]>
      : GetScalarType<T[P], AggregateVehicle[P]>
  }




  export type VehicleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleWhereInput
    orderBy?: VehicleOrderByWithAggregationInput | VehicleOrderByWithAggregationInput[]
    by: VehicleScalarFieldEnum[] | VehicleScalarFieldEnum
    having?: VehicleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehicleCountAggregateInputType | true
    _avg?: VehicleAvgAggregateInputType
    _sum?: VehicleSumAggregateInputType
    _min?: VehicleMinAggregateInputType
    _max?: VehicleMaxAggregateInputType
  }

  export type VehicleGroupByOutputType = {
    id: string
    ownerId: string
    model: string
    plate: string
    color: string | null
    seats: number
    createdAt: Date
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  type GetVehicleGroupByPayload<T extends VehicleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehicleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehicleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehicleGroupByOutputType[P]>
            : GetScalarType<T[P], VehicleGroupByOutputType[P]>
        }
      >
    >


  export type VehicleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    model?: boolean
    plate?: boolean
    color?: boolean
    seats?: boolean
    createdAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    trips?: boolean | Vehicle$tripsArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    model?: boolean
    plate?: boolean
    color?: boolean
    seats?: boolean
    createdAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    model?: boolean
    plate?: boolean
    color?: boolean
    seats?: boolean
    createdAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectScalar = {
    id?: boolean
    ownerId?: boolean
    model?: boolean
    plate?: boolean
    color?: boolean
    seats?: boolean
    createdAt?: boolean
  }

  export type VehicleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ownerId" | "model" | "plate" | "color" | "seats" | "createdAt", ExtArgs["result"]["vehicle"]>
  export type VehicleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    trips?: boolean | Vehicle$tripsArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VehicleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VehicleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $VehiclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vehicle"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      trips: Prisma.$TripPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ownerId: string
      model: string
      plate: string
      color: string | null
      seats: number
      createdAt: Date
    }, ExtArgs["result"]["vehicle"]>
    composites: {}
  }

  type VehicleGetPayload<S extends boolean | null | undefined | VehicleDefaultArgs> = $Result.GetResult<Prisma.$VehiclePayload, S>

  type VehicleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VehicleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehicleCountAggregateInputType | true
    }

  export interface VehicleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vehicle'], meta: { name: 'Vehicle' } }
    /**
     * Find zero or one Vehicle that matches the filter.
     * @param {VehicleFindUniqueArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehicleFindUniqueArgs>(args: SelectSubset<T, VehicleFindUniqueArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vehicle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VehicleFindUniqueOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehicleFindUniqueOrThrowArgs>(args: SelectSubset<T, VehicleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehicleFindFirstArgs>(args?: SelectSubset<T, VehicleFindFirstArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehicleFindFirstOrThrowArgs>(args?: SelectSubset<T, VehicleFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehicles
     * const vehicles = await prisma.vehicle.findMany()
     * 
     * // Get first 10 Vehicles
     * const vehicles = await prisma.vehicle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VehicleFindManyArgs>(args?: SelectSubset<T, VehicleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vehicle.
     * @param {VehicleCreateArgs} args - Arguments to create a Vehicle.
     * @example
     * // Create one Vehicle
     * const Vehicle = await prisma.vehicle.create({
     *   data: {
     *     // ... data to create a Vehicle
     *   }
     * })
     * 
     */
    create<T extends VehicleCreateArgs>(args: SelectSubset<T, VehicleCreateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vehicles.
     * @param {VehicleCreateManyArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehicleCreateManyArgs>(args?: SelectSubset<T, VehicleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vehicles and returns the data saved in the database.
     * @param {VehicleCreateManyAndReturnArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vehicles and only return the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VehicleCreateManyAndReturnArgs>(args?: SelectSubset<T, VehicleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vehicle.
     * @param {VehicleDeleteArgs} args - Arguments to delete one Vehicle.
     * @example
     * // Delete one Vehicle
     * const Vehicle = await prisma.vehicle.delete({
     *   where: {
     *     // ... filter to delete one Vehicle
     *   }
     * })
     * 
     */
    delete<T extends VehicleDeleteArgs>(args: SelectSubset<T, VehicleDeleteArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vehicle.
     * @param {VehicleUpdateArgs} args - Arguments to update one Vehicle.
     * @example
     * // Update one Vehicle
     * const vehicle = await prisma.vehicle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehicleUpdateArgs>(args: SelectSubset<T, VehicleUpdateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vehicles.
     * @param {VehicleDeleteManyArgs} args - Arguments to filter Vehicles to delete.
     * @example
     * // Delete a few Vehicles
     * const { count } = await prisma.vehicle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehicleDeleteManyArgs>(args?: SelectSubset<T, VehicleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehicleUpdateManyArgs>(args: SelectSubset<T, VehicleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles and returns the data updated in the database.
     * @param {VehicleUpdateManyAndReturnArgs} args - Arguments to update many Vehicles.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vehicles and only return the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.updateManyAndReturn({
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
    updateManyAndReturn<T extends VehicleUpdateManyAndReturnArgs>(args: SelectSubset<T, VehicleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vehicle.
     * @param {VehicleUpsertArgs} args - Arguments to update or create a Vehicle.
     * @example
     * // Update or create a Vehicle
     * const vehicle = await prisma.vehicle.upsert({
     *   create: {
     *     // ... data to create a Vehicle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehicle we want to update
     *   }
     * })
     */
    upsert<T extends VehicleUpsertArgs>(args: SelectSubset<T, VehicleUpsertArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleCountArgs} args - Arguments to filter Vehicles to count.
     * @example
     * // Count the number of Vehicles
     * const count = await prisma.vehicle.count({
     *   where: {
     *     // ... the filter for the Vehicles we want to count
     *   }
     * })
    **/
    count<T extends VehicleCountArgs>(
      args?: Subset<T, VehicleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VehicleAggregateArgs>(args: Subset<T, VehicleAggregateArgs>): Prisma.PrismaPromise<GetVehicleAggregateType<T>>

    /**
     * Group by Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends VehicleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehicleGroupByArgs['orderBy'] }
        : { orderBy?: VehicleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VehicleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vehicle model
   */
  readonly fields: VehicleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vehicle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehicleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    trips<T extends Vehicle$tripsArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$tripsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vehicle model
   */
  interface VehicleFieldRefs {
    readonly id: FieldRef<"Vehicle", 'String'>
    readonly ownerId: FieldRef<"Vehicle", 'String'>
    readonly model: FieldRef<"Vehicle", 'String'>
    readonly plate: FieldRef<"Vehicle", 'String'>
    readonly color: FieldRef<"Vehicle", 'String'>
    readonly seats: FieldRef<"Vehicle", 'Int'>
    readonly createdAt: FieldRef<"Vehicle", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vehicle findUnique
   */
  export type VehicleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findUniqueOrThrow
   */
  export type VehicleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findFirst
   */
  export type VehicleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findFirstOrThrow
   */
  export type VehicleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findMany
   */
  export type VehicleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicles to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle create
   */
  export type VehicleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to create a Vehicle.
     */
    data: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
  }

  /**
   * Vehicle createMany
   */
  export type VehicleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehicle createManyAndReturn
   */
  export type VehicleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vehicle update
   */
  export type VehicleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to update a Vehicle.
     */
    data: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
    /**
     * Choose, which Vehicle to update.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle updateMany
   */
  export type VehicleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vehicles.
     */
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to update.
     */
    limit?: number
  }

  /**
   * Vehicle updateManyAndReturn
   */
  export type VehicleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * The data used to update Vehicles.
     */
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vehicle upsert
   */
  export type VehicleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The filter to search for the Vehicle to update in case it exists.
     */
    where: VehicleWhereUniqueInput
    /**
     * In case the Vehicle found by the `where` argument doesn't exist, create a new Vehicle with this data.
     */
    create: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
    /**
     * In case the Vehicle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
  }

  /**
   * Vehicle delete
   */
  export type VehicleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter which Vehicle to delete.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle deleteMany
   */
  export type VehicleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicles to delete
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to delete.
     */
    limit?: number
  }

  /**
   * Vehicle.trips
   */
  export type Vehicle$tripsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    where?: TripWhereInput
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    cursor?: TripWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Vehicle without action
   */
  export type VehicleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
  }


  /**
   * Model Trip
   */

  export type AggregateTrip = {
    _count: TripCountAggregateOutputType | null
    _avg: TripAvgAggregateOutputType | null
    _sum: TripSumAggregateOutputType | null
    _min: TripMinAggregateOutputType | null
    _max: TripMaxAggregateOutputType | null
  }

  export type TripAvgAggregateOutputType = {
    fromLat: number | null
    fromLng: number | null
    toLat: number | null
    toLng: number | null
    contribution: number | null
    seats: number | null
  }

  export type TripSumAggregateOutputType = {
    fromLat: number | null
    fromLng: number | null
    toLat: number | null
    toLng: number | null
    contribution: number | null
    seats: number | null
  }

  export type TripMinAggregateOutputType = {
    id: string | null
    driverId: string | null
    vehicleId: string | null
    fromLabel: string | null
    toLabel: string | null
    fromLat: number | null
    fromLng: number | null
    toLat: number | null
    toLng: number | null
    departureTime: Date | null
    arrivalTime: Date | null
    contribution: number | null
    seats: number | null
    isRecurring: boolean | null
    status: $Enums.TripStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TripMaxAggregateOutputType = {
    id: string | null
    driverId: string | null
    vehicleId: string | null
    fromLabel: string | null
    toLabel: string | null
    fromLat: number | null
    fromLng: number | null
    toLat: number | null
    toLng: number | null
    departureTime: Date | null
    arrivalTime: Date | null
    contribution: number | null
    seats: number | null
    isRecurring: boolean | null
    status: $Enums.TripStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TripCountAggregateOutputType = {
    id: number
    driverId: number
    vehicleId: number
    fromLabel: number
    toLabel: number
    fromLat: number
    fromLng: number
    toLat: number
    toLng: number
    departureTime: number
    arrivalTime: number
    contribution: number
    seats: number
    isRecurring: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TripAvgAggregateInputType = {
    fromLat?: true
    fromLng?: true
    toLat?: true
    toLng?: true
    contribution?: true
    seats?: true
  }

  export type TripSumAggregateInputType = {
    fromLat?: true
    fromLng?: true
    toLat?: true
    toLng?: true
    contribution?: true
    seats?: true
  }

  export type TripMinAggregateInputType = {
    id?: true
    driverId?: true
    vehicleId?: true
    fromLabel?: true
    toLabel?: true
    fromLat?: true
    fromLng?: true
    toLat?: true
    toLng?: true
    departureTime?: true
    arrivalTime?: true
    contribution?: true
    seats?: true
    isRecurring?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TripMaxAggregateInputType = {
    id?: true
    driverId?: true
    vehicleId?: true
    fromLabel?: true
    toLabel?: true
    fromLat?: true
    fromLng?: true
    toLat?: true
    toLng?: true
    departureTime?: true
    arrivalTime?: true
    contribution?: true
    seats?: true
    isRecurring?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TripCountAggregateInputType = {
    id?: true
    driverId?: true
    vehicleId?: true
    fromLabel?: true
    toLabel?: true
    fromLat?: true
    fromLng?: true
    toLat?: true
    toLng?: true
    departureTime?: true
    arrivalTime?: true
    contribution?: true
    seats?: true
    isRecurring?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TripAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trip to aggregate.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Trips
    **/
    _count?: true | TripCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TripAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TripSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TripMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TripMaxAggregateInputType
  }

  export type GetTripAggregateType<T extends TripAggregateArgs> = {
        [P in keyof T & keyof AggregateTrip]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrip[P]>
      : GetScalarType<T[P], AggregateTrip[P]>
  }




  export type TripGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripWhereInput
    orderBy?: TripOrderByWithAggregationInput | TripOrderByWithAggregationInput[]
    by: TripScalarFieldEnum[] | TripScalarFieldEnum
    having?: TripScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TripCountAggregateInputType | true
    _avg?: TripAvgAggregateInputType
    _sum?: TripSumAggregateInputType
    _min?: TripMinAggregateInputType
    _max?: TripMaxAggregateInputType
  }

  export type TripGroupByOutputType = {
    id: string
    driverId: string
    vehicleId: string
    fromLabel: string
    toLabel: string
    fromLat: number
    fromLng: number
    toLat: number
    toLng: number
    departureTime: Date
    arrivalTime: Date | null
    contribution: number
    seats: number
    isRecurring: boolean
    status: $Enums.TripStatus
    createdAt: Date
    updatedAt: Date
    _count: TripCountAggregateOutputType | null
    _avg: TripAvgAggregateOutputType | null
    _sum: TripSumAggregateOutputType | null
    _min: TripMinAggregateOutputType | null
    _max: TripMaxAggregateOutputType | null
  }

  type GetTripGroupByPayload<T extends TripGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TripGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TripGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TripGroupByOutputType[P]>
            : GetScalarType<T[P], TripGroupByOutputType[P]>
        }
      >
    >


  export type TripSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    driverId?: boolean
    vehicleId?: boolean
    fromLabel?: boolean
    toLabel?: boolean
    fromLat?: boolean
    fromLng?: boolean
    toLat?: boolean
    toLng?: boolean
    departureTime?: boolean
    arrivalTime?: boolean
    contribution?: boolean
    seats?: boolean
    isRecurring?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    driver?: boolean | UserDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    waypoints?: boolean | Trip$waypointsArgs<ExtArgs>
    bookings?: boolean | Trip$bookingsArgs<ExtArgs>
    _count?: boolean | TripCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trip"]>

  export type TripSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    driverId?: boolean
    vehicleId?: boolean
    fromLabel?: boolean
    toLabel?: boolean
    fromLat?: boolean
    fromLng?: boolean
    toLat?: boolean
    toLng?: boolean
    departureTime?: boolean
    arrivalTime?: boolean
    contribution?: boolean
    seats?: boolean
    isRecurring?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    driver?: boolean | UserDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trip"]>

  export type TripSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    driverId?: boolean
    vehicleId?: boolean
    fromLabel?: boolean
    toLabel?: boolean
    fromLat?: boolean
    fromLng?: boolean
    toLat?: boolean
    toLng?: boolean
    departureTime?: boolean
    arrivalTime?: boolean
    contribution?: boolean
    seats?: boolean
    isRecurring?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    driver?: boolean | UserDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trip"]>

  export type TripSelectScalar = {
    id?: boolean
    driverId?: boolean
    vehicleId?: boolean
    fromLabel?: boolean
    toLabel?: boolean
    fromLat?: boolean
    fromLng?: boolean
    toLat?: boolean
    toLng?: boolean
    departureTime?: boolean
    arrivalTime?: boolean
    contribution?: boolean
    seats?: boolean
    isRecurring?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TripOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "driverId" | "vehicleId" | "fromLabel" | "toLabel" | "fromLat" | "fromLng" | "toLat" | "toLng" | "departureTime" | "arrivalTime" | "contribution" | "seats" | "isRecurring" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["trip"]>
  export type TripInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driver?: boolean | UserDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    waypoints?: boolean | Trip$waypointsArgs<ExtArgs>
    bookings?: boolean | Trip$bookingsArgs<ExtArgs>
    _count?: boolean | TripCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TripIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driver?: boolean | UserDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }
  export type TripIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driver?: boolean | UserDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }

  export type $TripPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Trip"
    objects: {
      driver: Prisma.$UserPayload<ExtArgs>
      vehicle: Prisma.$VehiclePayload<ExtArgs>
      waypoints: Prisma.$WaypointPayload<ExtArgs>[]
      bookings: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      driverId: string
      vehicleId: string
      fromLabel: string
      toLabel: string
      fromLat: number
      fromLng: number
      toLat: number
      toLng: number
      departureTime: Date
      arrivalTime: Date | null
      contribution: number
      seats: number
      isRecurring: boolean
      status: $Enums.TripStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["trip"]>
    composites: {}
  }

  type TripGetPayload<S extends boolean | null | undefined | TripDefaultArgs> = $Result.GetResult<Prisma.$TripPayload, S>

  type TripCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TripFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TripCountAggregateInputType | true
    }

  export interface TripDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Trip'], meta: { name: 'Trip' } }
    /**
     * Find zero or one Trip that matches the filter.
     * @param {TripFindUniqueArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TripFindUniqueArgs>(args: SelectSubset<T, TripFindUniqueArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trip that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TripFindUniqueOrThrowArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TripFindUniqueOrThrowArgs>(args: SelectSubset<T, TripFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trip that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindFirstArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TripFindFirstArgs>(args?: SelectSubset<T, TripFindFirstArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trip that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindFirstOrThrowArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TripFindFirstOrThrowArgs>(args?: SelectSubset<T, TripFindFirstOrThrowArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Trips that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trips
     * const trips = await prisma.trip.findMany()
     * 
     * // Get first 10 Trips
     * const trips = await prisma.trip.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tripWithIdOnly = await prisma.trip.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TripFindManyArgs>(args?: SelectSubset<T, TripFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trip.
     * @param {TripCreateArgs} args - Arguments to create a Trip.
     * @example
     * // Create one Trip
     * const Trip = await prisma.trip.create({
     *   data: {
     *     // ... data to create a Trip
     *   }
     * })
     * 
     */
    create<T extends TripCreateArgs>(args: SelectSubset<T, TripCreateArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Trips.
     * @param {TripCreateManyArgs} args - Arguments to create many Trips.
     * @example
     * // Create many Trips
     * const trip = await prisma.trip.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TripCreateManyArgs>(args?: SelectSubset<T, TripCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Trips and returns the data saved in the database.
     * @param {TripCreateManyAndReturnArgs} args - Arguments to create many Trips.
     * @example
     * // Create many Trips
     * const trip = await prisma.trip.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Trips and only return the `id`
     * const tripWithIdOnly = await prisma.trip.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TripCreateManyAndReturnArgs>(args?: SelectSubset<T, TripCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Trip.
     * @param {TripDeleteArgs} args - Arguments to delete one Trip.
     * @example
     * // Delete one Trip
     * const Trip = await prisma.trip.delete({
     *   where: {
     *     // ... filter to delete one Trip
     *   }
     * })
     * 
     */
    delete<T extends TripDeleteArgs>(args: SelectSubset<T, TripDeleteArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trip.
     * @param {TripUpdateArgs} args - Arguments to update one Trip.
     * @example
     * // Update one Trip
     * const trip = await prisma.trip.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TripUpdateArgs>(args: SelectSubset<T, TripUpdateArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Trips.
     * @param {TripDeleteManyArgs} args - Arguments to filter Trips to delete.
     * @example
     * // Delete a few Trips
     * const { count } = await prisma.trip.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TripDeleteManyArgs>(args?: SelectSubset<T, TripDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trips
     * const trip = await prisma.trip.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TripUpdateManyArgs>(args: SelectSubset<T, TripUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trips and returns the data updated in the database.
     * @param {TripUpdateManyAndReturnArgs} args - Arguments to update many Trips.
     * @example
     * // Update many Trips
     * const trip = await prisma.trip.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Trips and only return the `id`
     * const tripWithIdOnly = await prisma.trip.updateManyAndReturn({
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
    updateManyAndReturn<T extends TripUpdateManyAndReturnArgs>(args: SelectSubset<T, TripUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Trip.
     * @param {TripUpsertArgs} args - Arguments to update or create a Trip.
     * @example
     * // Update or create a Trip
     * const trip = await prisma.trip.upsert({
     *   create: {
     *     // ... data to create a Trip
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trip we want to update
     *   }
     * })
     */
    upsert<T extends TripUpsertArgs>(args: SelectSubset<T, TripUpsertArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Trips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripCountArgs} args - Arguments to filter Trips to count.
     * @example
     * // Count the number of Trips
     * const count = await prisma.trip.count({
     *   where: {
     *     // ... the filter for the Trips we want to count
     *   }
     * })
    **/
    count<T extends TripCountArgs>(
      args?: Subset<T, TripCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TripCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TripAggregateArgs>(args: Subset<T, TripAggregateArgs>): Prisma.PrismaPromise<GetTripAggregateType<T>>

    /**
     * Group by Trip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends TripGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TripGroupByArgs['orderBy'] }
        : { orderBy?: TripGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TripGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTripGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Trip model
   */
  readonly fields: TripFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trip.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TripClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    driver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vehicle<T extends VehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleDefaultArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    waypoints<T extends Trip$waypointsArgs<ExtArgs> = {}>(args?: Subset<T, Trip$waypointsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaypointPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookings<T extends Trip$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Trip$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Trip model
   */
  interface TripFieldRefs {
    readonly id: FieldRef<"Trip", 'String'>
    readonly driverId: FieldRef<"Trip", 'String'>
    readonly vehicleId: FieldRef<"Trip", 'String'>
    readonly fromLabel: FieldRef<"Trip", 'String'>
    readonly toLabel: FieldRef<"Trip", 'String'>
    readonly fromLat: FieldRef<"Trip", 'Float'>
    readonly fromLng: FieldRef<"Trip", 'Float'>
    readonly toLat: FieldRef<"Trip", 'Float'>
    readonly toLng: FieldRef<"Trip", 'Float'>
    readonly departureTime: FieldRef<"Trip", 'DateTime'>
    readonly arrivalTime: FieldRef<"Trip", 'DateTime'>
    readonly contribution: FieldRef<"Trip", 'Int'>
    readonly seats: FieldRef<"Trip", 'Int'>
    readonly isRecurring: FieldRef<"Trip", 'Boolean'>
    readonly status: FieldRef<"Trip", 'TripStatus'>
    readonly createdAt: FieldRef<"Trip", 'DateTime'>
    readonly updatedAt: FieldRef<"Trip", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Trip findUnique
   */
  export type TripFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip findUniqueOrThrow
   */
  export type TripFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip findFirst
   */
  export type TripFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trips.
     */
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Trip findFirstOrThrow
   */
  export type TripFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trips.
     */
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Trip findMany
   */
  export type TripFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trips to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Trip create
   */
  export type TripCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * The data needed to create a Trip.
     */
    data: XOR<TripCreateInput, TripUncheckedCreateInput>
  }

  /**
   * Trip createMany
   */
  export type TripCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Trips.
     */
    data: TripCreateManyInput | TripCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Trip createManyAndReturn
   */
  export type TripCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * The data used to create many Trips.
     */
    data: TripCreateManyInput | TripCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trip update
   */
  export type TripUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * The data needed to update a Trip.
     */
    data: XOR<TripUpdateInput, TripUncheckedUpdateInput>
    /**
     * Choose, which Trip to update.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip updateMany
   */
  export type TripUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Trips.
     */
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyInput>
    /**
     * Filter which Trips to update
     */
    where?: TripWhereInput
    /**
     * Limit how many Trips to update.
     */
    limit?: number
  }

  /**
   * Trip updateManyAndReturn
   */
  export type TripUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * The data used to update Trips.
     */
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyInput>
    /**
     * Filter which Trips to update
     */
    where?: TripWhereInput
    /**
     * Limit how many Trips to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trip upsert
   */
  export type TripUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * The filter to search for the Trip to update in case it exists.
     */
    where: TripWhereUniqueInput
    /**
     * In case the Trip found by the `where` argument doesn't exist, create a new Trip with this data.
     */
    create: XOR<TripCreateInput, TripUncheckedCreateInput>
    /**
     * In case the Trip was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TripUpdateInput, TripUncheckedUpdateInput>
  }

  /**
   * Trip delete
   */
  export type TripDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter which Trip to delete.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip deleteMany
   */
  export type TripDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trips to delete
     */
    where?: TripWhereInput
    /**
     * Limit how many Trips to delete.
     */
    limit?: number
  }

  /**
   * Trip.waypoints
   */
  export type Trip$waypointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waypoint
     */
    select?: WaypointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Waypoint
     */
    omit?: WaypointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaypointInclude<ExtArgs> | null
    where?: WaypointWhereInput
    orderBy?: WaypointOrderByWithRelationInput | WaypointOrderByWithRelationInput[]
    cursor?: WaypointWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WaypointScalarFieldEnum | WaypointScalarFieldEnum[]
  }

  /**
   * Trip.bookings
   */
  export type Trip$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Trip without action
   */
  export type TripDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
  }


  /**
   * Model Waypoint
   */

  export type AggregateWaypoint = {
    _count: WaypointCountAggregateOutputType | null
    _avg: WaypointAvgAggregateOutputType | null
    _sum: WaypointSumAggregateOutputType | null
    _min: WaypointMinAggregateOutputType | null
    _max: WaypointMaxAggregateOutputType | null
  }

  export type WaypointAvgAggregateOutputType = {
    lat: number | null
    lng: number | null
    order: number | null
  }

  export type WaypointSumAggregateOutputType = {
    lat: number | null
    lng: number | null
    order: number | null
  }

  export type WaypointMinAggregateOutputType = {
    id: string | null
    tripId: string | null
    label: string | null
    lat: number | null
    lng: number | null
    order: number | null
  }

  export type WaypointMaxAggregateOutputType = {
    id: string | null
    tripId: string | null
    label: string | null
    lat: number | null
    lng: number | null
    order: number | null
  }

  export type WaypointCountAggregateOutputType = {
    id: number
    tripId: number
    label: number
    lat: number
    lng: number
    order: number
    _all: number
  }


  export type WaypointAvgAggregateInputType = {
    lat?: true
    lng?: true
    order?: true
  }

  export type WaypointSumAggregateInputType = {
    lat?: true
    lng?: true
    order?: true
  }

  export type WaypointMinAggregateInputType = {
    id?: true
    tripId?: true
    label?: true
    lat?: true
    lng?: true
    order?: true
  }

  export type WaypointMaxAggregateInputType = {
    id?: true
    tripId?: true
    label?: true
    lat?: true
    lng?: true
    order?: true
  }

  export type WaypointCountAggregateInputType = {
    id?: true
    tripId?: true
    label?: true
    lat?: true
    lng?: true
    order?: true
    _all?: true
  }

  export type WaypointAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Waypoint to aggregate.
     */
    where?: WaypointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Waypoints to fetch.
     */
    orderBy?: WaypointOrderByWithRelationInput | WaypointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WaypointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Waypoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Waypoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Waypoints
    **/
    _count?: true | WaypointCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WaypointAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WaypointSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WaypointMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WaypointMaxAggregateInputType
  }

  export type GetWaypointAggregateType<T extends WaypointAggregateArgs> = {
        [P in keyof T & keyof AggregateWaypoint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWaypoint[P]>
      : GetScalarType<T[P], AggregateWaypoint[P]>
  }




  export type WaypointGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WaypointWhereInput
    orderBy?: WaypointOrderByWithAggregationInput | WaypointOrderByWithAggregationInput[]
    by: WaypointScalarFieldEnum[] | WaypointScalarFieldEnum
    having?: WaypointScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WaypointCountAggregateInputType | true
    _avg?: WaypointAvgAggregateInputType
    _sum?: WaypointSumAggregateInputType
    _min?: WaypointMinAggregateInputType
    _max?: WaypointMaxAggregateInputType
  }

  export type WaypointGroupByOutputType = {
    id: string
    tripId: string
    label: string
    lat: number
    lng: number
    order: number
    _count: WaypointCountAggregateOutputType | null
    _avg: WaypointAvgAggregateOutputType | null
    _sum: WaypointSumAggregateOutputType | null
    _min: WaypointMinAggregateOutputType | null
    _max: WaypointMaxAggregateOutputType | null
  }

  type GetWaypointGroupByPayload<T extends WaypointGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WaypointGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WaypointGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WaypointGroupByOutputType[P]>
            : GetScalarType<T[P], WaypointGroupByOutputType[P]>
        }
      >
    >


  export type WaypointSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    label?: boolean
    lat?: boolean
    lng?: boolean
    order?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["waypoint"]>

  export type WaypointSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    label?: boolean
    lat?: boolean
    lng?: boolean
    order?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["waypoint"]>

  export type WaypointSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    label?: boolean
    lat?: boolean
    lng?: boolean
    order?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["waypoint"]>

  export type WaypointSelectScalar = {
    id?: boolean
    tripId?: boolean
    label?: boolean
    lat?: boolean
    lng?: boolean
    order?: boolean
  }

  export type WaypointOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tripId" | "label" | "lat" | "lng" | "order", ExtArgs["result"]["waypoint"]>
  export type WaypointInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }
  export type WaypointIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }
  export type WaypointIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }

  export type $WaypointPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Waypoint"
    objects: {
      trip: Prisma.$TripPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tripId: string
      label: string
      lat: number
      lng: number
      order: number
    }, ExtArgs["result"]["waypoint"]>
    composites: {}
  }

  type WaypointGetPayload<S extends boolean | null | undefined | WaypointDefaultArgs> = $Result.GetResult<Prisma.$WaypointPayload, S>

  type WaypointCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WaypointFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WaypointCountAggregateInputType | true
    }

  export interface WaypointDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Waypoint'], meta: { name: 'Waypoint' } }
    /**
     * Find zero or one Waypoint that matches the filter.
     * @param {WaypointFindUniqueArgs} args - Arguments to find a Waypoint
     * @example
     * // Get one Waypoint
     * const waypoint = await prisma.waypoint.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WaypointFindUniqueArgs>(args: SelectSubset<T, WaypointFindUniqueArgs<ExtArgs>>): Prisma__WaypointClient<$Result.GetResult<Prisma.$WaypointPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Waypoint that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WaypointFindUniqueOrThrowArgs} args - Arguments to find a Waypoint
     * @example
     * // Get one Waypoint
     * const waypoint = await prisma.waypoint.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WaypointFindUniqueOrThrowArgs>(args: SelectSubset<T, WaypointFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WaypointClient<$Result.GetResult<Prisma.$WaypointPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Waypoint that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaypointFindFirstArgs} args - Arguments to find a Waypoint
     * @example
     * // Get one Waypoint
     * const waypoint = await prisma.waypoint.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WaypointFindFirstArgs>(args?: SelectSubset<T, WaypointFindFirstArgs<ExtArgs>>): Prisma__WaypointClient<$Result.GetResult<Prisma.$WaypointPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Waypoint that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaypointFindFirstOrThrowArgs} args - Arguments to find a Waypoint
     * @example
     * // Get one Waypoint
     * const waypoint = await prisma.waypoint.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WaypointFindFirstOrThrowArgs>(args?: SelectSubset<T, WaypointFindFirstOrThrowArgs<ExtArgs>>): Prisma__WaypointClient<$Result.GetResult<Prisma.$WaypointPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Waypoints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaypointFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Waypoints
     * const waypoints = await prisma.waypoint.findMany()
     * 
     * // Get first 10 Waypoints
     * const waypoints = await prisma.waypoint.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const waypointWithIdOnly = await prisma.waypoint.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WaypointFindManyArgs>(args?: SelectSubset<T, WaypointFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaypointPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Waypoint.
     * @param {WaypointCreateArgs} args - Arguments to create a Waypoint.
     * @example
     * // Create one Waypoint
     * const Waypoint = await prisma.waypoint.create({
     *   data: {
     *     // ... data to create a Waypoint
     *   }
     * })
     * 
     */
    create<T extends WaypointCreateArgs>(args: SelectSubset<T, WaypointCreateArgs<ExtArgs>>): Prisma__WaypointClient<$Result.GetResult<Prisma.$WaypointPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Waypoints.
     * @param {WaypointCreateManyArgs} args - Arguments to create many Waypoints.
     * @example
     * // Create many Waypoints
     * const waypoint = await prisma.waypoint.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WaypointCreateManyArgs>(args?: SelectSubset<T, WaypointCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Waypoints and returns the data saved in the database.
     * @param {WaypointCreateManyAndReturnArgs} args - Arguments to create many Waypoints.
     * @example
     * // Create many Waypoints
     * const waypoint = await prisma.waypoint.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Waypoints and only return the `id`
     * const waypointWithIdOnly = await prisma.waypoint.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WaypointCreateManyAndReturnArgs>(args?: SelectSubset<T, WaypointCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaypointPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Waypoint.
     * @param {WaypointDeleteArgs} args - Arguments to delete one Waypoint.
     * @example
     * // Delete one Waypoint
     * const Waypoint = await prisma.waypoint.delete({
     *   where: {
     *     // ... filter to delete one Waypoint
     *   }
     * })
     * 
     */
    delete<T extends WaypointDeleteArgs>(args: SelectSubset<T, WaypointDeleteArgs<ExtArgs>>): Prisma__WaypointClient<$Result.GetResult<Prisma.$WaypointPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Waypoint.
     * @param {WaypointUpdateArgs} args - Arguments to update one Waypoint.
     * @example
     * // Update one Waypoint
     * const waypoint = await prisma.waypoint.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WaypointUpdateArgs>(args: SelectSubset<T, WaypointUpdateArgs<ExtArgs>>): Prisma__WaypointClient<$Result.GetResult<Prisma.$WaypointPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Waypoints.
     * @param {WaypointDeleteManyArgs} args - Arguments to filter Waypoints to delete.
     * @example
     * // Delete a few Waypoints
     * const { count } = await prisma.waypoint.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WaypointDeleteManyArgs>(args?: SelectSubset<T, WaypointDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Waypoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaypointUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Waypoints
     * const waypoint = await prisma.waypoint.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WaypointUpdateManyArgs>(args: SelectSubset<T, WaypointUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Waypoints and returns the data updated in the database.
     * @param {WaypointUpdateManyAndReturnArgs} args - Arguments to update many Waypoints.
     * @example
     * // Update many Waypoints
     * const waypoint = await prisma.waypoint.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Waypoints and only return the `id`
     * const waypointWithIdOnly = await prisma.waypoint.updateManyAndReturn({
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
    updateManyAndReturn<T extends WaypointUpdateManyAndReturnArgs>(args: SelectSubset<T, WaypointUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaypointPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Waypoint.
     * @param {WaypointUpsertArgs} args - Arguments to update or create a Waypoint.
     * @example
     * // Update or create a Waypoint
     * const waypoint = await prisma.waypoint.upsert({
     *   create: {
     *     // ... data to create a Waypoint
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Waypoint we want to update
     *   }
     * })
     */
    upsert<T extends WaypointUpsertArgs>(args: SelectSubset<T, WaypointUpsertArgs<ExtArgs>>): Prisma__WaypointClient<$Result.GetResult<Prisma.$WaypointPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Waypoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaypointCountArgs} args - Arguments to filter Waypoints to count.
     * @example
     * // Count the number of Waypoints
     * const count = await prisma.waypoint.count({
     *   where: {
     *     // ... the filter for the Waypoints we want to count
     *   }
     * })
    **/
    count<T extends WaypointCountArgs>(
      args?: Subset<T, WaypointCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WaypointCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Waypoint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaypointAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WaypointAggregateArgs>(args: Subset<T, WaypointAggregateArgs>): Prisma.PrismaPromise<GetWaypointAggregateType<T>>

    /**
     * Group by Waypoint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaypointGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends WaypointGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WaypointGroupByArgs['orderBy'] }
        : { orderBy?: WaypointGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WaypointGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWaypointGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Waypoint model
   */
  readonly fields: WaypointFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Waypoint.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WaypointClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trip<T extends TripDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TripDefaultArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Waypoint model
   */
  interface WaypointFieldRefs {
    readonly id: FieldRef<"Waypoint", 'String'>
    readonly tripId: FieldRef<"Waypoint", 'String'>
    readonly label: FieldRef<"Waypoint", 'String'>
    readonly lat: FieldRef<"Waypoint", 'Float'>
    readonly lng: FieldRef<"Waypoint", 'Float'>
    readonly order: FieldRef<"Waypoint", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Waypoint findUnique
   */
  export type WaypointFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waypoint
     */
    select?: WaypointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Waypoint
     */
    omit?: WaypointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaypointInclude<ExtArgs> | null
    /**
     * Filter, which Waypoint to fetch.
     */
    where: WaypointWhereUniqueInput
  }

  /**
   * Waypoint findUniqueOrThrow
   */
  export type WaypointFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waypoint
     */
    select?: WaypointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Waypoint
     */
    omit?: WaypointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaypointInclude<ExtArgs> | null
    /**
     * Filter, which Waypoint to fetch.
     */
    where: WaypointWhereUniqueInput
  }

  /**
   * Waypoint findFirst
   */
  export type WaypointFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waypoint
     */
    select?: WaypointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Waypoint
     */
    omit?: WaypointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaypointInclude<ExtArgs> | null
    /**
     * Filter, which Waypoint to fetch.
     */
    where?: WaypointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Waypoints to fetch.
     */
    orderBy?: WaypointOrderByWithRelationInput | WaypointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Waypoints.
     */
    cursor?: WaypointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Waypoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Waypoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Waypoints.
     */
    distinct?: WaypointScalarFieldEnum | WaypointScalarFieldEnum[]
  }

  /**
   * Waypoint findFirstOrThrow
   */
  export type WaypointFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waypoint
     */
    select?: WaypointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Waypoint
     */
    omit?: WaypointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaypointInclude<ExtArgs> | null
    /**
     * Filter, which Waypoint to fetch.
     */
    where?: WaypointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Waypoints to fetch.
     */
    orderBy?: WaypointOrderByWithRelationInput | WaypointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Waypoints.
     */
    cursor?: WaypointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Waypoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Waypoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Waypoints.
     */
    distinct?: WaypointScalarFieldEnum | WaypointScalarFieldEnum[]
  }

  /**
   * Waypoint findMany
   */
  export type WaypointFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waypoint
     */
    select?: WaypointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Waypoint
     */
    omit?: WaypointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaypointInclude<ExtArgs> | null
    /**
     * Filter, which Waypoints to fetch.
     */
    where?: WaypointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Waypoints to fetch.
     */
    orderBy?: WaypointOrderByWithRelationInput | WaypointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Waypoints.
     */
    cursor?: WaypointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Waypoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Waypoints.
     */
    skip?: number
    distinct?: WaypointScalarFieldEnum | WaypointScalarFieldEnum[]
  }

  /**
   * Waypoint create
   */
  export type WaypointCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waypoint
     */
    select?: WaypointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Waypoint
     */
    omit?: WaypointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaypointInclude<ExtArgs> | null
    /**
     * The data needed to create a Waypoint.
     */
    data: XOR<WaypointCreateInput, WaypointUncheckedCreateInput>
  }

  /**
   * Waypoint createMany
   */
  export type WaypointCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Waypoints.
     */
    data: WaypointCreateManyInput | WaypointCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Waypoint createManyAndReturn
   */
  export type WaypointCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waypoint
     */
    select?: WaypointSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Waypoint
     */
    omit?: WaypointOmit<ExtArgs> | null
    /**
     * The data used to create many Waypoints.
     */
    data: WaypointCreateManyInput | WaypointCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaypointIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Waypoint update
   */
  export type WaypointUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waypoint
     */
    select?: WaypointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Waypoint
     */
    omit?: WaypointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaypointInclude<ExtArgs> | null
    /**
     * The data needed to update a Waypoint.
     */
    data: XOR<WaypointUpdateInput, WaypointUncheckedUpdateInput>
    /**
     * Choose, which Waypoint to update.
     */
    where: WaypointWhereUniqueInput
  }

  /**
   * Waypoint updateMany
   */
  export type WaypointUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Waypoints.
     */
    data: XOR<WaypointUpdateManyMutationInput, WaypointUncheckedUpdateManyInput>
    /**
     * Filter which Waypoints to update
     */
    where?: WaypointWhereInput
    /**
     * Limit how many Waypoints to update.
     */
    limit?: number
  }

  /**
   * Waypoint updateManyAndReturn
   */
  export type WaypointUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waypoint
     */
    select?: WaypointSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Waypoint
     */
    omit?: WaypointOmit<ExtArgs> | null
    /**
     * The data used to update Waypoints.
     */
    data: XOR<WaypointUpdateManyMutationInput, WaypointUncheckedUpdateManyInput>
    /**
     * Filter which Waypoints to update
     */
    where?: WaypointWhereInput
    /**
     * Limit how many Waypoints to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaypointIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Waypoint upsert
   */
  export type WaypointUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waypoint
     */
    select?: WaypointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Waypoint
     */
    omit?: WaypointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaypointInclude<ExtArgs> | null
    /**
     * The filter to search for the Waypoint to update in case it exists.
     */
    where: WaypointWhereUniqueInput
    /**
     * In case the Waypoint found by the `where` argument doesn't exist, create a new Waypoint with this data.
     */
    create: XOR<WaypointCreateInput, WaypointUncheckedCreateInput>
    /**
     * In case the Waypoint was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WaypointUpdateInput, WaypointUncheckedUpdateInput>
  }

  /**
   * Waypoint delete
   */
  export type WaypointDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waypoint
     */
    select?: WaypointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Waypoint
     */
    omit?: WaypointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaypointInclude<ExtArgs> | null
    /**
     * Filter which Waypoint to delete.
     */
    where: WaypointWhereUniqueInput
  }

  /**
   * Waypoint deleteMany
   */
  export type WaypointDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Waypoints to delete
     */
    where?: WaypointWhereInput
    /**
     * Limit how many Waypoints to delete.
     */
    limit?: number
  }

  /**
   * Waypoint without action
   */
  export type WaypointDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waypoint
     */
    select?: WaypointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Waypoint
     */
    omit?: WaypointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaypointInclude<ExtArgs> | null
  }


  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingAvgAggregateOutputType = {
    seats: number | null
  }

  export type BookingSumAggregateOutputType = {
    seats: number | null
  }

  export type BookingMinAggregateOutputType = {
    id: string | null
    tripId: string | null
    passengerId: string | null
    status: $Enums.BookingStatus | null
    seats: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingMaxAggregateOutputType = {
    id: string | null
    tripId: string | null
    passengerId: string | null
    status: $Enums.BookingStatus | null
    seats: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    tripId: number
    passengerId: number
    status: number
    seats: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BookingAvgAggregateInputType = {
    seats?: true
  }

  export type BookingSumAggregateInputType = {
    seats?: true
  }

  export type BookingMinAggregateInputType = {
    id?: true
    tripId?: true
    passengerId?: true
    status?: true
    seats?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    tripId?: true
    passengerId?: true
    status?: true
    seats?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    tripId?: true
    passengerId?: true
    status?: true
    seats?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _avg?: BookingAvgAggregateInputType
    _sum?: BookingSumAggregateInputType
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: string
    tripId: string
    passengerId: string
    status: $Enums.BookingStatus
    seats: number
    createdAt: Date
    updatedAt: Date
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    passengerId?: boolean
    status?: boolean
    seats?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
    passenger?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    passengerId?: boolean
    status?: boolean
    seats?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
    passenger?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    passengerId?: boolean
    status?: boolean
    seats?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
    passenger?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectScalar = {
    id?: boolean
    tripId?: boolean
    passengerId?: boolean
    status?: boolean
    seats?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tripId" | "passengerId" | "status" | "seats" | "createdAt" | "updatedAt", ExtArgs["result"]["booking"]>
  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
    passenger?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
    passenger?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BookingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
    passenger?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      trip: Prisma.$TripPayload<ExtArgs>
      passenger: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tripId: string
      passengerId: string
      status: $Enums.BookingStatus
      seats: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {BookingCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {BookingUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.updateManyAndReturn({
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
    updateManyAndReturn<T extends BookingUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trip<T extends TripDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TripDefaultArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    passenger<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Booking model
   */
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'String'>
    readonly tripId: FieldRef<"Booking", 'String'>
    readonly passengerId: FieldRef<"Booking", 'String'>
    readonly status: FieldRef<"Booking", 'BookingStatus'>
    readonly seats: FieldRef<"Booking", 'Int'>
    readonly createdAt: FieldRef<"Booking", 'DateTime'>
    readonly updatedAt: FieldRef<"Booking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Booking createManyAndReturn
   */
  export type BookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Booking updateManyAndReturn
   */
  export type BookingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
  }


  /**
   * Model Rating
   */

  export type AggregateRating = {
    _count: RatingCountAggregateOutputType | null
    _avg: RatingAvgAggregateOutputType | null
    _sum: RatingSumAggregateOutputType | null
    _min: RatingMinAggregateOutputType | null
    _max: RatingMaxAggregateOutputType | null
  }

  export type RatingAvgAggregateOutputType = {
    score: number | null
  }

  export type RatingSumAggregateOutputType = {
    score: number | null
  }

  export type RatingMinAggregateOutputType = {
    id: string | null
    tripId: string | null
    authorId: string | null
    targetId: string | null
    score: number | null
    comment: string | null
    createdAt: Date | null
  }

  export type RatingMaxAggregateOutputType = {
    id: string | null
    tripId: string | null
    authorId: string | null
    targetId: string | null
    score: number | null
    comment: string | null
    createdAt: Date | null
  }

  export type RatingCountAggregateOutputType = {
    id: number
    tripId: number
    authorId: number
    targetId: number
    score: number
    comment: number
    createdAt: number
    _all: number
  }


  export type RatingAvgAggregateInputType = {
    score?: true
  }

  export type RatingSumAggregateInputType = {
    score?: true
  }

  export type RatingMinAggregateInputType = {
    id?: true
    tripId?: true
    authorId?: true
    targetId?: true
    score?: true
    comment?: true
    createdAt?: true
  }

  export type RatingMaxAggregateInputType = {
    id?: true
    tripId?: true
    authorId?: true
    targetId?: true
    score?: true
    comment?: true
    createdAt?: true
  }

  export type RatingCountAggregateInputType = {
    id?: true
    tripId?: true
    authorId?: true
    targetId?: true
    score?: true
    comment?: true
    createdAt?: true
    _all?: true
  }

  export type RatingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rating to aggregate.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ratings
    **/
    _count?: true | RatingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RatingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RatingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RatingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RatingMaxAggregateInputType
  }

  export type GetRatingAggregateType<T extends RatingAggregateArgs> = {
        [P in keyof T & keyof AggregateRating]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRating[P]>
      : GetScalarType<T[P], AggregateRating[P]>
  }




  export type RatingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingWhereInput
    orderBy?: RatingOrderByWithAggregationInput | RatingOrderByWithAggregationInput[]
    by: RatingScalarFieldEnum[] | RatingScalarFieldEnum
    having?: RatingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RatingCountAggregateInputType | true
    _avg?: RatingAvgAggregateInputType
    _sum?: RatingSumAggregateInputType
    _min?: RatingMinAggregateInputType
    _max?: RatingMaxAggregateInputType
  }

  export type RatingGroupByOutputType = {
    id: string
    tripId: string
    authorId: string
    targetId: string
    score: number
    comment: string | null
    createdAt: Date
    _count: RatingCountAggregateOutputType | null
    _avg: RatingAvgAggregateOutputType | null
    _sum: RatingSumAggregateOutputType | null
    _min: RatingMinAggregateOutputType | null
    _max: RatingMaxAggregateOutputType | null
  }

  type GetRatingGroupByPayload<T extends RatingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RatingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RatingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RatingGroupByOutputType[P]>
            : GetScalarType<T[P], RatingGroupByOutputType[P]>
        }
      >
    >


  export type RatingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    authorId?: boolean
    targetId?: boolean
    score?: boolean
    comment?: boolean
    createdAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    target?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rating"]>

  export type RatingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    authorId?: boolean
    targetId?: boolean
    score?: boolean
    comment?: boolean
    createdAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    target?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rating"]>

  export type RatingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    authorId?: boolean
    targetId?: boolean
    score?: boolean
    comment?: boolean
    createdAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    target?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rating"]>

  export type RatingSelectScalar = {
    id?: boolean
    tripId?: boolean
    authorId?: boolean
    targetId?: boolean
    score?: boolean
    comment?: boolean
    createdAt?: boolean
  }

  export type RatingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tripId" | "authorId" | "targetId" | "score" | "comment" | "createdAt", ExtArgs["result"]["rating"]>
  export type RatingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    target?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RatingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    target?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RatingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    target?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RatingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rating"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      target: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tripId: string
      authorId: string
      targetId: string
      score: number
      comment: string | null
      createdAt: Date
    }, ExtArgs["result"]["rating"]>
    composites: {}
  }

  type RatingGetPayload<S extends boolean | null | undefined | RatingDefaultArgs> = $Result.GetResult<Prisma.$RatingPayload, S>

  type RatingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RatingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RatingCountAggregateInputType | true
    }

  export interface RatingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rating'], meta: { name: 'Rating' } }
    /**
     * Find zero or one Rating that matches the filter.
     * @param {RatingFindUniqueArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RatingFindUniqueArgs>(args: SelectSubset<T, RatingFindUniqueArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rating that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RatingFindUniqueOrThrowArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RatingFindUniqueOrThrowArgs>(args: SelectSubset<T, RatingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rating that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindFirstArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RatingFindFirstArgs>(args?: SelectSubset<T, RatingFindFirstArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rating that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindFirstOrThrowArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RatingFindFirstOrThrowArgs>(args?: SelectSubset<T, RatingFindFirstOrThrowArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ratings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ratings
     * const ratings = await prisma.rating.findMany()
     * 
     * // Get first 10 Ratings
     * const ratings = await prisma.rating.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ratingWithIdOnly = await prisma.rating.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RatingFindManyArgs>(args?: SelectSubset<T, RatingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rating.
     * @param {RatingCreateArgs} args - Arguments to create a Rating.
     * @example
     * // Create one Rating
     * const Rating = await prisma.rating.create({
     *   data: {
     *     // ... data to create a Rating
     *   }
     * })
     * 
     */
    create<T extends RatingCreateArgs>(args: SelectSubset<T, RatingCreateArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ratings.
     * @param {RatingCreateManyArgs} args - Arguments to create many Ratings.
     * @example
     * // Create many Ratings
     * const rating = await prisma.rating.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RatingCreateManyArgs>(args?: SelectSubset<T, RatingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ratings and returns the data saved in the database.
     * @param {RatingCreateManyAndReturnArgs} args - Arguments to create many Ratings.
     * @example
     * // Create many Ratings
     * const rating = await prisma.rating.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ratings and only return the `id`
     * const ratingWithIdOnly = await prisma.rating.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RatingCreateManyAndReturnArgs>(args?: SelectSubset<T, RatingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rating.
     * @param {RatingDeleteArgs} args - Arguments to delete one Rating.
     * @example
     * // Delete one Rating
     * const Rating = await prisma.rating.delete({
     *   where: {
     *     // ... filter to delete one Rating
     *   }
     * })
     * 
     */
    delete<T extends RatingDeleteArgs>(args: SelectSubset<T, RatingDeleteArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rating.
     * @param {RatingUpdateArgs} args - Arguments to update one Rating.
     * @example
     * // Update one Rating
     * const rating = await prisma.rating.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RatingUpdateArgs>(args: SelectSubset<T, RatingUpdateArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ratings.
     * @param {RatingDeleteManyArgs} args - Arguments to filter Ratings to delete.
     * @example
     * // Delete a few Ratings
     * const { count } = await prisma.rating.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RatingDeleteManyArgs>(args?: SelectSubset<T, RatingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ratings
     * const rating = await prisma.rating.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RatingUpdateManyArgs>(args: SelectSubset<T, RatingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ratings and returns the data updated in the database.
     * @param {RatingUpdateManyAndReturnArgs} args - Arguments to update many Ratings.
     * @example
     * // Update many Ratings
     * const rating = await prisma.rating.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ratings and only return the `id`
     * const ratingWithIdOnly = await prisma.rating.updateManyAndReturn({
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
    updateManyAndReturn<T extends RatingUpdateManyAndReturnArgs>(args: SelectSubset<T, RatingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rating.
     * @param {RatingUpsertArgs} args - Arguments to update or create a Rating.
     * @example
     * // Update or create a Rating
     * const rating = await prisma.rating.upsert({
     *   create: {
     *     // ... data to create a Rating
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rating we want to update
     *   }
     * })
     */
    upsert<T extends RatingUpsertArgs>(args: SelectSubset<T, RatingUpsertArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingCountArgs} args - Arguments to filter Ratings to count.
     * @example
     * // Count the number of Ratings
     * const count = await prisma.rating.count({
     *   where: {
     *     // ... the filter for the Ratings we want to count
     *   }
     * })
    **/
    count<T extends RatingCountArgs>(
      args?: Subset<T, RatingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RatingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RatingAggregateArgs>(args: Subset<T, RatingAggregateArgs>): Prisma.PrismaPromise<GetRatingAggregateType<T>>

    /**
     * Group by Rating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends RatingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RatingGroupByArgs['orderBy'] }
        : { orderBy?: RatingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RatingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRatingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rating model
   */
  readonly fields: RatingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rating.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RatingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    target<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Rating model
   */
  interface RatingFieldRefs {
    readonly id: FieldRef<"Rating", 'String'>
    readonly tripId: FieldRef<"Rating", 'String'>
    readonly authorId: FieldRef<"Rating", 'String'>
    readonly targetId: FieldRef<"Rating", 'String'>
    readonly score: FieldRef<"Rating", 'Int'>
    readonly comment: FieldRef<"Rating", 'String'>
    readonly createdAt: FieldRef<"Rating", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Rating findUnique
   */
  export type RatingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating findUniqueOrThrow
   */
  export type RatingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating findFirst
   */
  export type RatingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ratings.
     */
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Rating findFirstOrThrow
   */
  export type RatingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ratings.
     */
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Rating findMany
   */
  export type RatingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Ratings to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Rating create
   */
  export type RatingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * The data needed to create a Rating.
     */
    data: XOR<RatingCreateInput, RatingUncheckedCreateInput>
  }

  /**
   * Rating createMany
   */
  export type RatingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ratings.
     */
    data: RatingCreateManyInput | RatingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rating createManyAndReturn
   */
  export type RatingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * The data used to create many Ratings.
     */
    data: RatingCreateManyInput | RatingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rating update
   */
  export type RatingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * The data needed to update a Rating.
     */
    data: XOR<RatingUpdateInput, RatingUncheckedUpdateInput>
    /**
     * Choose, which Rating to update.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating updateMany
   */
  export type RatingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ratings.
     */
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyInput>
    /**
     * Filter which Ratings to update
     */
    where?: RatingWhereInput
    /**
     * Limit how many Ratings to update.
     */
    limit?: number
  }

  /**
   * Rating updateManyAndReturn
   */
  export type RatingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * The data used to update Ratings.
     */
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyInput>
    /**
     * Filter which Ratings to update
     */
    where?: RatingWhereInput
    /**
     * Limit how many Ratings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rating upsert
   */
  export type RatingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * The filter to search for the Rating to update in case it exists.
     */
    where: RatingWhereUniqueInput
    /**
     * In case the Rating found by the `where` argument doesn't exist, create a new Rating with this data.
     */
    create: XOR<RatingCreateInput, RatingUncheckedCreateInput>
    /**
     * In case the Rating was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RatingUpdateInput, RatingUncheckedUpdateInput>
  }

  /**
   * Rating delete
   */
  export type RatingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter which Rating to delete.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating deleteMany
   */
  export type RatingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ratings to delete
     */
    where?: RatingWhereInput
    /**
     * Limit how many Ratings to delete.
     */
    limit?: number
  }

  /**
   * Rating without action
   */
  export type RatingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
  }


  /**
   * Model Device
   */

  export type AggregateDevice = {
    _count: DeviceCountAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  export type DeviceMinAggregateOutputType = {
    id: string | null
    ownerId: string | null
    token: string | null
    platform: string | null
    createdAt: Date | null
  }

  export type DeviceMaxAggregateOutputType = {
    id: string | null
    ownerId: string | null
    token: string | null
    platform: string | null
    createdAt: Date | null
  }

  export type DeviceCountAggregateOutputType = {
    id: number
    ownerId: number
    token: number
    platform: number
    createdAt: number
    _all: number
  }


  export type DeviceMinAggregateInputType = {
    id?: true
    ownerId?: true
    token?: true
    platform?: true
    createdAt?: true
  }

  export type DeviceMaxAggregateInputType = {
    id?: true
    ownerId?: true
    token?: true
    platform?: true
    createdAt?: true
  }

  export type DeviceCountAggregateInputType = {
    id?: true
    ownerId?: true
    token?: true
    platform?: true
    createdAt?: true
    _all?: true
  }

  export type DeviceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Device to aggregate.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Devices
    **/
    _count?: true | DeviceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeviceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeviceMaxAggregateInputType
  }

  export type GetDeviceAggregateType<T extends DeviceAggregateArgs> = {
        [P in keyof T & keyof AggregateDevice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDevice[P]>
      : GetScalarType<T[P], AggregateDevice[P]>
  }




  export type DeviceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceWhereInput
    orderBy?: DeviceOrderByWithAggregationInput | DeviceOrderByWithAggregationInput[]
    by: DeviceScalarFieldEnum[] | DeviceScalarFieldEnum
    having?: DeviceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeviceCountAggregateInputType | true
    _min?: DeviceMinAggregateInputType
    _max?: DeviceMaxAggregateInputType
  }

  export type DeviceGroupByOutputType = {
    id: string
    ownerId: string
    token: string
    platform: string | null
    createdAt: Date
    _count: DeviceCountAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  type GetDeviceGroupByPayload<T extends DeviceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeviceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeviceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeviceGroupByOutputType[P]>
            : GetScalarType<T[P], DeviceGroupByOutputType[P]>
        }
      >
    >


  export type DeviceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    token?: boolean
    platform?: boolean
    createdAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    token?: boolean
    platform?: boolean
    createdAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    token?: boolean
    platform?: boolean
    createdAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectScalar = {
    id?: boolean
    ownerId?: boolean
    token?: boolean
    platform?: boolean
    createdAt?: boolean
  }

  export type DeviceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ownerId" | "token" | "platform" | "createdAt", ExtArgs["result"]["device"]>
  export type DeviceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DeviceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DeviceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DevicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Device"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ownerId: string
      token: string
      platform: string | null
      createdAt: Date
    }, ExtArgs["result"]["device"]>
    composites: {}
  }

  type DeviceGetPayload<S extends boolean | null | undefined | DeviceDefaultArgs> = $Result.GetResult<Prisma.$DevicePayload, S>

  type DeviceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeviceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeviceCountAggregateInputType | true
    }

  export interface DeviceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Device'], meta: { name: 'Device' } }
    /**
     * Find zero or one Device that matches the filter.
     * @param {DeviceFindUniqueArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceFindUniqueArgs>(args: SelectSubset<T, DeviceFindUniqueArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Device that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeviceFindUniqueOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceFindUniqueOrThrowArgs>(args: SelectSubset<T, DeviceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Device that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceFindFirstArgs>(args?: SelectSubset<T, DeviceFindFirstArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Device that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceFindFirstOrThrowArgs>(args?: SelectSubset<T, DeviceFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Devices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Devices
     * const devices = await prisma.device.findMany()
     * 
     * // Get first 10 Devices
     * const devices = await prisma.device.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deviceWithIdOnly = await prisma.device.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeviceFindManyArgs>(args?: SelectSubset<T, DeviceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Device.
     * @param {DeviceCreateArgs} args - Arguments to create a Device.
     * @example
     * // Create one Device
     * const Device = await prisma.device.create({
     *   data: {
     *     // ... data to create a Device
     *   }
     * })
     * 
     */
    create<T extends DeviceCreateArgs>(args: SelectSubset<T, DeviceCreateArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Devices.
     * @param {DeviceCreateManyArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeviceCreateManyArgs>(args?: SelectSubset<T, DeviceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Devices and returns the data saved in the database.
     * @param {DeviceCreateManyAndReturnArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Devices and only return the `id`
     * const deviceWithIdOnly = await prisma.device.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeviceCreateManyAndReturnArgs>(args?: SelectSubset<T, DeviceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Device.
     * @param {DeviceDeleteArgs} args - Arguments to delete one Device.
     * @example
     * // Delete one Device
     * const Device = await prisma.device.delete({
     *   where: {
     *     // ... filter to delete one Device
     *   }
     * })
     * 
     */
    delete<T extends DeviceDeleteArgs>(args: SelectSubset<T, DeviceDeleteArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Device.
     * @param {DeviceUpdateArgs} args - Arguments to update one Device.
     * @example
     * // Update one Device
     * const device = await prisma.device.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeviceUpdateArgs>(args: SelectSubset<T, DeviceUpdateArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Devices.
     * @param {DeviceDeleteManyArgs} args - Arguments to filter Devices to delete.
     * @example
     * // Delete a few Devices
     * const { count } = await prisma.device.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeviceDeleteManyArgs>(args?: SelectSubset<T, DeviceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Devices
     * const device = await prisma.device.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeviceUpdateManyArgs>(args: SelectSubset<T, DeviceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices and returns the data updated in the database.
     * @param {DeviceUpdateManyAndReturnArgs} args - Arguments to update many Devices.
     * @example
     * // Update many Devices
     * const device = await prisma.device.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Devices and only return the `id`
     * const deviceWithIdOnly = await prisma.device.updateManyAndReturn({
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
    updateManyAndReturn<T extends DeviceUpdateManyAndReturnArgs>(args: SelectSubset<T, DeviceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Device.
     * @param {DeviceUpsertArgs} args - Arguments to update or create a Device.
     * @example
     * // Update or create a Device
     * const device = await prisma.device.upsert({
     *   create: {
     *     // ... data to create a Device
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Device we want to update
     *   }
     * })
     */
    upsert<T extends DeviceUpsertArgs>(args: SelectSubset<T, DeviceUpsertArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceCountArgs} args - Arguments to filter Devices to count.
     * @example
     * // Count the number of Devices
     * const count = await prisma.device.count({
     *   where: {
     *     // ... the filter for the Devices we want to count
     *   }
     * })
    **/
    count<T extends DeviceCountArgs>(
      args?: Subset<T, DeviceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeviceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeviceAggregateArgs>(args: Subset<T, DeviceAggregateArgs>): Prisma.PrismaPromise<GetDeviceAggregateType<T>>

    /**
     * Group by Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends DeviceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeviceGroupByArgs['orderBy'] }
        : { orderBy?: DeviceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeviceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Device model
   */
  readonly fields: DeviceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Device.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeviceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Device model
   */
  interface DeviceFieldRefs {
    readonly id: FieldRef<"Device", 'String'>
    readonly ownerId: FieldRef<"Device", 'String'>
    readonly token: FieldRef<"Device", 'String'>
    readonly platform: FieldRef<"Device", 'String'>
    readonly createdAt: FieldRef<"Device", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Device findUnique
   */
  export type DeviceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device findUniqueOrThrow
   */
  export type DeviceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device findFirst
   */
  export type DeviceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device findFirstOrThrow
   */
  export type DeviceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device findMany
   */
  export type DeviceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Devices to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device create
   */
  export type DeviceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The data needed to create a Device.
     */
    data: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>
  }

  /**
   * Device createMany
   */
  export type DeviceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Devices.
     */
    data: DeviceCreateManyInput | DeviceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Device createManyAndReturn
   */
  export type DeviceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * The data used to create many Devices.
     */
    data: DeviceCreateManyInput | DeviceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Device update
   */
  export type DeviceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The data needed to update a Device.
     */
    data: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>
    /**
     * Choose, which Device to update.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device updateMany
   */
  export type DeviceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Devices.
     */
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyInput>
    /**
     * Filter which Devices to update
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to update.
     */
    limit?: number
  }

  /**
   * Device updateManyAndReturn
   */
  export type DeviceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * The data used to update Devices.
     */
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyInput>
    /**
     * Filter which Devices to update
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Device upsert
   */
  export type DeviceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The filter to search for the Device to update in case it exists.
     */
    where: DeviceWhereUniqueInput
    /**
     * In case the Device found by the `where` argument doesn't exist, create a new Device with this data.
     */
    create: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>
    /**
     * In case the Device was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>
  }

  /**
   * Device delete
   */
  export type DeviceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter which Device to delete.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device deleteMany
   */
  export type DeviceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Devices to delete
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to delete.
     */
    limit?: number
  }

  /**
   * Device without action
   */
  export type DeviceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
  }


  /**
   * Model Report
   */

  export type AggregateReport = {
    _count: ReportCountAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  export type ReportMinAggregateOutputType = {
    id: string | null
    authorId: string | null
    targetId: string | null
    reason: string | null
    status: $Enums.ReportStatus | null
    createdAt: Date | null
  }

  export type ReportMaxAggregateOutputType = {
    id: string | null
    authorId: string | null
    targetId: string | null
    reason: string | null
    status: $Enums.ReportStatus | null
    createdAt: Date | null
  }

  export type ReportCountAggregateOutputType = {
    id: number
    authorId: number
    targetId: number
    reason: number
    status: number
    createdAt: number
    _all: number
  }


  export type ReportMinAggregateInputType = {
    id?: true
    authorId?: true
    targetId?: true
    reason?: true
    status?: true
    createdAt?: true
  }

  export type ReportMaxAggregateInputType = {
    id?: true
    authorId?: true
    targetId?: true
    reason?: true
    status?: true
    createdAt?: true
  }

  export type ReportCountAggregateInputType = {
    id?: true
    authorId?: true
    targetId?: true
    reason?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type ReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Report to aggregate.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reports
    **/
    _count?: true | ReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportMaxAggregateInputType
  }

  export type GetReportAggregateType<T extends ReportAggregateArgs> = {
        [P in keyof T & keyof AggregateReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReport[P]>
      : GetScalarType<T[P], AggregateReport[P]>
  }




  export type ReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithAggregationInput | ReportOrderByWithAggregationInput[]
    by: ReportScalarFieldEnum[] | ReportScalarFieldEnum
    having?: ReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportCountAggregateInputType | true
    _min?: ReportMinAggregateInputType
    _max?: ReportMaxAggregateInputType
  }

  export type ReportGroupByOutputType = {
    id: string
    authorId: string
    targetId: string
    reason: string
    status: $Enums.ReportStatus
    createdAt: Date
    _count: ReportCountAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  type GetReportGroupByPayload<T extends ReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportGroupByOutputType[P]>
            : GetScalarType<T[P], ReportGroupByOutputType[P]>
        }
      >
    >


  export type ReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorId?: boolean
    targetId?: boolean
    reason?: boolean
    status?: boolean
    createdAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    target?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorId?: boolean
    targetId?: boolean
    reason?: boolean
    status?: boolean
    createdAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    target?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorId?: boolean
    targetId?: boolean
    reason?: boolean
    status?: boolean
    createdAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    target?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectScalar = {
    id?: boolean
    authorId?: boolean
    targetId?: boolean
    reason?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type ReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "authorId" | "targetId" | "reason" | "status" | "createdAt", ExtArgs["result"]["report"]>
  export type ReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    target?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    target?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    target?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Report"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      target: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      authorId: string
      targetId: string
      reason: string
      status: $Enums.ReportStatus
      createdAt: Date
    }, ExtArgs["result"]["report"]>
    composites: {}
  }

  type ReportGetPayload<S extends boolean | null | undefined | ReportDefaultArgs> = $Result.GetResult<Prisma.$ReportPayload, S>

  type ReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReportCountAggregateInputType | true
    }

  export interface ReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Report'], meta: { name: 'Report' } }
    /**
     * Find zero or one Report that matches the filter.
     * @param {ReportFindUniqueArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReportFindUniqueArgs>(args: SelectSubset<T, ReportFindUniqueArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Report that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReportFindUniqueOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReportFindUniqueOrThrowArgs>(args: SelectSubset<T, ReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReportFindFirstArgs>(args?: SelectSubset<T, ReportFindFirstArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReportFindFirstOrThrowArgs>(args?: SelectSubset<T, ReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reports
     * const reports = await prisma.report.findMany()
     * 
     * // Get first 10 Reports
     * const reports = await prisma.report.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reportWithIdOnly = await prisma.report.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReportFindManyArgs>(args?: SelectSubset<T, ReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Report.
     * @param {ReportCreateArgs} args - Arguments to create a Report.
     * @example
     * // Create one Report
     * const Report = await prisma.report.create({
     *   data: {
     *     // ... data to create a Report
     *   }
     * })
     * 
     */
    create<T extends ReportCreateArgs>(args: SelectSubset<T, ReportCreateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reports.
     * @param {ReportCreateManyArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReportCreateManyArgs>(args?: SelectSubset<T, ReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reports and returns the data saved in the database.
     * @param {ReportCreateManyAndReturnArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reports and only return the `id`
     * const reportWithIdOnly = await prisma.report.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReportCreateManyAndReturnArgs>(args?: SelectSubset<T, ReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Report.
     * @param {ReportDeleteArgs} args - Arguments to delete one Report.
     * @example
     * // Delete one Report
     * const Report = await prisma.report.delete({
     *   where: {
     *     // ... filter to delete one Report
     *   }
     * })
     * 
     */
    delete<T extends ReportDeleteArgs>(args: SelectSubset<T, ReportDeleteArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Report.
     * @param {ReportUpdateArgs} args - Arguments to update one Report.
     * @example
     * // Update one Report
     * const report = await prisma.report.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReportUpdateArgs>(args: SelectSubset<T, ReportUpdateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reports.
     * @param {ReportDeleteManyArgs} args - Arguments to filter Reports to delete.
     * @example
     * // Delete a few Reports
     * const { count } = await prisma.report.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReportDeleteManyArgs>(args?: SelectSubset<T, ReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReportUpdateManyArgs>(args: SelectSubset<T, ReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports and returns the data updated in the database.
     * @param {ReportUpdateManyAndReturnArgs} args - Arguments to update many Reports.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reports and only return the `id`
     * const reportWithIdOnly = await prisma.report.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReportUpdateManyAndReturnArgs>(args: SelectSubset<T, ReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Report.
     * @param {ReportUpsertArgs} args - Arguments to update or create a Report.
     * @example
     * // Update or create a Report
     * const report = await prisma.report.upsert({
     *   create: {
     *     // ... data to create a Report
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Report we want to update
     *   }
     * })
     */
    upsert<T extends ReportUpsertArgs>(args: SelectSubset<T, ReportUpsertArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportCountArgs} args - Arguments to filter Reports to count.
     * @example
     * // Count the number of Reports
     * const count = await prisma.report.count({
     *   where: {
     *     // ... the filter for the Reports we want to count
     *   }
     * })
    **/
    count<T extends ReportCountArgs>(
      args?: Subset<T, ReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReportAggregateArgs>(args: Subset<T, ReportAggregateArgs>): Prisma.PrismaPromise<GetReportAggregateType<T>>

    /**
     * Group by Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends ReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReportGroupByArgs['orderBy'] }
        : { orderBy?: ReportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Report model
   */
  readonly fields: ReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Report.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    target<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Report model
   */
  interface ReportFieldRefs {
    readonly id: FieldRef<"Report", 'String'>
    readonly authorId: FieldRef<"Report", 'String'>
    readonly targetId: FieldRef<"Report", 'String'>
    readonly reason: FieldRef<"Report", 'String'>
    readonly status: FieldRef<"Report", 'ReportStatus'>
    readonly createdAt: FieldRef<"Report", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Report findUnique
   */
  export type ReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findUniqueOrThrow
   */
  export type ReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findFirst
   */
  export type ReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findFirstOrThrow
   */
  export type ReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findMany
   */
  export type ReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Reports to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report create
   */
  export type ReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The data needed to create a Report.
     */
    data: XOR<ReportCreateInput, ReportUncheckedCreateInput>
  }

  /**
   * Report createMany
   */
  export type ReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reports.
     */
    data: ReportCreateManyInput | ReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Report createManyAndReturn
   */
  export type ReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * The data used to create many Reports.
     */
    data: ReportCreateManyInput | ReportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Report update
   */
  export type ReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The data needed to update a Report.
     */
    data: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
    /**
     * Choose, which Report to update.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report updateMany
   */
  export type ReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to update.
     */
    limit?: number
  }

  /**
   * Report updateManyAndReturn
   */
  export type ReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Report upsert
   */
  export type ReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The filter to search for the Report to update in case it exists.
     */
    where: ReportWhereUniqueInput
    /**
     * In case the Report found by the `where` argument doesn't exist, create a new Report with this data.
     */
    create: XOR<ReportCreateInput, ReportUncheckedCreateInput>
    /**
     * In case the Report was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
  }

  /**
   * Report delete
   */
  export type ReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter which Report to delete.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report deleteMany
   */
  export type ReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reports to delete
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to delete.
     */
    limit?: number
  }

  /**
   * Report without action
   */
  export type ReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    phone: 'phone',
    fullName: 'fullName',
    photoUrl: 'photoUrl',
    rating: 'rating',
    tripsCount: 'tripsCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VehicleScalarFieldEnum: {
    id: 'id',
    ownerId: 'ownerId',
    model: 'model',
    plate: 'plate',
    color: 'color',
    seats: 'seats',
    createdAt: 'createdAt'
  };

  export type VehicleScalarFieldEnum = (typeof VehicleScalarFieldEnum)[keyof typeof VehicleScalarFieldEnum]


  export const TripScalarFieldEnum: {
    id: 'id',
    driverId: 'driverId',
    vehicleId: 'vehicleId',
    fromLabel: 'fromLabel',
    toLabel: 'toLabel',
    fromLat: 'fromLat',
    fromLng: 'fromLng',
    toLat: 'toLat',
    toLng: 'toLng',
    departureTime: 'departureTime',
    arrivalTime: 'arrivalTime',
    contribution: 'contribution',
    seats: 'seats',
    isRecurring: 'isRecurring',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TripScalarFieldEnum = (typeof TripScalarFieldEnum)[keyof typeof TripScalarFieldEnum]


  export const WaypointScalarFieldEnum: {
    id: 'id',
    tripId: 'tripId',
    label: 'label',
    lat: 'lat',
    lng: 'lng',
    order: 'order'
  };

  export type WaypointScalarFieldEnum = (typeof WaypointScalarFieldEnum)[keyof typeof WaypointScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    tripId: 'tripId',
    passengerId: 'passengerId',
    status: 'status',
    seats: 'seats',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const RatingScalarFieldEnum: {
    id: 'id',
    tripId: 'tripId',
    authorId: 'authorId',
    targetId: 'targetId',
    score: 'score',
    comment: 'comment',
    createdAt: 'createdAt'
  };

  export type RatingScalarFieldEnum = (typeof RatingScalarFieldEnum)[keyof typeof RatingScalarFieldEnum]


  export const DeviceScalarFieldEnum: {
    id: 'id',
    ownerId: 'ownerId',
    token: 'token',
    platform: 'platform',
    createdAt: 'createdAt'
  };

  export type DeviceScalarFieldEnum = (typeof DeviceScalarFieldEnum)[keyof typeof DeviceScalarFieldEnum]


  export const ReportScalarFieldEnum: {
    id: 'id',
    authorId: 'authorId',
    targetId: 'targetId',
    reason: 'reason',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type ReportScalarFieldEnum = (typeof ReportScalarFieldEnum)[keyof typeof ReportScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'TripStatus'
   */
  export type EnumTripStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TripStatus'>
    


  /**
   * Reference to a field of type 'TripStatus[]'
   */
  export type ListEnumTripStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TripStatus[]'>
    


  /**
   * Reference to a field of type 'BookingStatus'
   */
  export type EnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus'>
    


  /**
   * Reference to a field of type 'BookingStatus[]'
   */
  export type ListEnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus[]'>
    


  /**
   * Reference to a field of type 'ReportStatus'
   */
  export type EnumReportStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReportStatus'>
    


  /**
   * Reference to a field of type 'ReportStatus[]'
   */
  export type ListEnumReportStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReportStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    fullName?: StringNullableFilter<"User"> | string | null
    photoUrl?: StringNullableFilter<"User"> | string | null
    rating?: FloatFilter<"User"> | number
    tripsCount?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    vehicles?: VehicleListRelationFilter
    tripsDriven?: TripListRelationFilter
    tripsBooked?: BookingListRelationFilter
    ratingsGiven?: RatingListRelationFilter
    ratingsReceived?: RatingListRelationFilter
    reportsMade?: ReportListRelationFilter
    reportsReceived?: ReportListRelationFilter
    devices?: DeviceListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    phone?: SortOrder
    fullName?: SortOrderInput | SortOrder
    photoUrl?: SortOrderInput | SortOrder
    rating?: SortOrder
    tripsCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vehicles?: VehicleOrderByRelationAggregateInput
    tripsDriven?: TripOrderByRelationAggregateInput
    tripsBooked?: BookingOrderByRelationAggregateInput
    ratingsGiven?: RatingOrderByRelationAggregateInput
    ratingsReceived?: RatingOrderByRelationAggregateInput
    reportsMade?: ReportOrderByRelationAggregateInput
    reportsReceived?: ReportOrderByRelationAggregateInput
    devices?: DeviceOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phone?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullName?: StringNullableFilter<"User"> | string | null
    photoUrl?: StringNullableFilter<"User"> | string | null
    rating?: FloatFilter<"User"> | number
    tripsCount?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    vehicles?: VehicleListRelationFilter
    tripsDriven?: TripListRelationFilter
    tripsBooked?: BookingListRelationFilter
    ratingsGiven?: RatingListRelationFilter
    ratingsReceived?: RatingListRelationFilter
    reportsMade?: ReportListRelationFilter
    reportsReceived?: ReportListRelationFilter
    devices?: DeviceListRelationFilter
  }, "id" | "phone">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    phone?: SortOrder
    fullName?: SortOrderInput | SortOrder
    photoUrl?: SortOrderInput | SortOrder
    rating?: SortOrder
    tripsCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    fullName?: StringNullableWithAggregatesFilter<"User"> | string | null
    photoUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    rating?: FloatWithAggregatesFilter<"User"> | number
    tripsCount?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type VehicleWhereInput = {
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    id?: UuidFilter<"Vehicle"> | string
    ownerId?: UuidFilter<"Vehicle"> | string
    model?: StringFilter<"Vehicle"> | string
    plate?: StringFilter<"Vehicle"> | string
    color?: StringNullableFilter<"Vehicle"> | string | null
    seats?: IntFilter<"Vehicle"> | number
    createdAt?: DateTimeFilter<"Vehicle"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    trips?: TripListRelationFilter
  }

  export type VehicleOrderByWithRelationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    model?: SortOrder
    plate?: SortOrder
    color?: SortOrderInput | SortOrder
    seats?: SortOrder
    createdAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    trips?: TripOrderByRelationAggregateInput
  }

  export type VehicleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    plate?: string
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    ownerId?: UuidFilter<"Vehicle"> | string
    model?: StringFilter<"Vehicle"> | string
    color?: StringNullableFilter<"Vehicle"> | string | null
    seats?: IntFilter<"Vehicle"> | number
    createdAt?: DateTimeFilter<"Vehicle"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    trips?: TripListRelationFilter
  }, "id" | "plate">

  export type VehicleOrderByWithAggregationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    model?: SortOrder
    plate?: SortOrder
    color?: SortOrderInput | SortOrder
    seats?: SortOrder
    createdAt?: SortOrder
    _count?: VehicleCountOrderByAggregateInput
    _avg?: VehicleAvgOrderByAggregateInput
    _max?: VehicleMaxOrderByAggregateInput
    _min?: VehicleMinOrderByAggregateInput
    _sum?: VehicleSumOrderByAggregateInput
  }

  export type VehicleScalarWhereWithAggregatesInput = {
    AND?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    OR?: VehicleScalarWhereWithAggregatesInput[]
    NOT?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Vehicle"> | string
    ownerId?: UuidWithAggregatesFilter<"Vehicle"> | string
    model?: StringWithAggregatesFilter<"Vehicle"> | string
    plate?: StringWithAggregatesFilter<"Vehicle"> | string
    color?: StringNullableWithAggregatesFilter<"Vehicle"> | string | null
    seats?: IntWithAggregatesFilter<"Vehicle"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Vehicle"> | Date | string
  }

  export type TripWhereInput = {
    AND?: TripWhereInput | TripWhereInput[]
    OR?: TripWhereInput[]
    NOT?: TripWhereInput | TripWhereInput[]
    id?: UuidFilter<"Trip"> | string
    driverId?: UuidFilter<"Trip"> | string
    vehicleId?: UuidFilter<"Trip"> | string
    fromLabel?: StringFilter<"Trip"> | string
    toLabel?: StringFilter<"Trip"> | string
    fromLat?: FloatFilter<"Trip"> | number
    fromLng?: FloatFilter<"Trip"> | number
    toLat?: FloatFilter<"Trip"> | number
    toLng?: FloatFilter<"Trip"> | number
    departureTime?: DateTimeFilter<"Trip"> | Date | string
    arrivalTime?: DateTimeNullableFilter<"Trip"> | Date | string | null
    contribution?: IntFilter<"Trip"> | number
    seats?: IntFilter<"Trip"> | number
    isRecurring?: BoolFilter<"Trip"> | boolean
    status?: EnumTripStatusFilter<"Trip"> | $Enums.TripStatus
    createdAt?: DateTimeFilter<"Trip"> | Date | string
    updatedAt?: DateTimeFilter<"Trip"> | Date | string
    driver?: XOR<UserScalarRelationFilter, UserWhereInput>
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
    waypoints?: WaypointListRelationFilter
    bookings?: BookingListRelationFilter
  }

  export type TripOrderByWithRelationInput = {
    id?: SortOrder
    driverId?: SortOrder
    vehicleId?: SortOrder
    fromLabel?: SortOrder
    toLabel?: SortOrder
    fromLat?: SortOrder
    fromLng?: SortOrder
    toLat?: SortOrder
    toLng?: SortOrder
    departureTime?: SortOrder
    arrivalTime?: SortOrderInput | SortOrder
    contribution?: SortOrder
    seats?: SortOrder
    isRecurring?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    driver?: UserOrderByWithRelationInput
    vehicle?: VehicleOrderByWithRelationInput
    waypoints?: WaypointOrderByRelationAggregateInput
    bookings?: BookingOrderByRelationAggregateInput
  }

  export type TripWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TripWhereInput | TripWhereInput[]
    OR?: TripWhereInput[]
    NOT?: TripWhereInput | TripWhereInput[]
    driverId?: UuidFilter<"Trip"> | string
    vehicleId?: UuidFilter<"Trip"> | string
    fromLabel?: StringFilter<"Trip"> | string
    toLabel?: StringFilter<"Trip"> | string
    fromLat?: FloatFilter<"Trip"> | number
    fromLng?: FloatFilter<"Trip"> | number
    toLat?: FloatFilter<"Trip"> | number
    toLng?: FloatFilter<"Trip"> | number
    departureTime?: DateTimeFilter<"Trip"> | Date | string
    arrivalTime?: DateTimeNullableFilter<"Trip"> | Date | string | null
    contribution?: IntFilter<"Trip"> | number
    seats?: IntFilter<"Trip"> | number
    isRecurring?: BoolFilter<"Trip"> | boolean
    status?: EnumTripStatusFilter<"Trip"> | $Enums.TripStatus
    createdAt?: DateTimeFilter<"Trip"> | Date | string
    updatedAt?: DateTimeFilter<"Trip"> | Date | string
    driver?: XOR<UserScalarRelationFilter, UserWhereInput>
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
    waypoints?: WaypointListRelationFilter
    bookings?: BookingListRelationFilter
  }, "id">

  export type TripOrderByWithAggregationInput = {
    id?: SortOrder
    driverId?: SortOrder
    vehicleId?: SortOrder
    fromLabel?: SortOrder
    toLabel?: SortOrder
    fromLat?: SortOrder
    fromLng?: SortOrder
    toLat?: SortOrder
    toLng?: SortOrder
    departureTime?: SortOrder
    arrivalTime?: SortOrderInput | SortOrder
    contribution?: SortOrder
    seats?: SortOrder
    isRecurring?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TripCountOrderByAggregateInput
    _avg?: TripAvgOrderByAggregateInput
    _max?: TripMaxOrderByAggregateInput
    _min?: TripMinOrderByAggregateInput
    _sum?: TripSumOrderByAggregateInput
  }

  export type TripScalarWhereWithAggregatesInput = {
    AND?: TripScalarWhereWithAggregatesInput | TripScalarWhereWithAggregatesInput[]
    OR?: TripScalarWhereWithAggregatesInput[]
    NOT?: TripScalarWhereWithAggregatesInput | TripScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Trip"> | string
    driverId?: UuidWithAggregatesFilter<"Trip"> | string
    vehicleId?: UuidWithAggregatesFilter<"Trip"> | string
    fromLabel?: StringWithAggregatesFilter<"Trip"> | string
    toLabel?: StringWithAggregatesFilter<"Trip"> | string
    fromLat?: FloatWithAggregatesFilter<"Trip"> | number
    fromLng?: FloatWithAggregatesFilter<"Trip"> | number
    toLat?: FloatWithAggregatesFilter<"Trip"> | number
    toLng?: FloatWithAggregatesFilter<"Trip"> | number
    departureTime?: DateTimeWithAggregatesFilter<"Trip"> | Date | string
    arrivalTime?: DateTimeNullableWithAggregatesFilter<"Trip"> | Date | string | null
    contribution?: IntWithAggregatesFilter<"Trip"> | number
    seats?: IntWithAggregatesFilter<"Trip"> | number
    isRecurring?: BoolWithAggregatesFilter<"Trip"> | boolean
    status?: EnumTripStatusWithAggregatesFilter<"Trip"> | $Enums.TripStatus
    createdAt?: DateTimeWithAggregatesFilter<"Trip"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Trip"> | Date | string
  }

  export type WaypointWhereInput = {
    AND?: WaypointWhereInput | WaypointWhereInput[]
    OR?: WaypointWhereInput[]
    NOT?: WaypointWhereInput | WaypointWhereInput[]
    id?: UuidFilter<"Waypoint"> | string
    tripId?: UuidFilter<"Waypoint"> | string
    label?: StringFilter<"Waypoint"> | string
    lat?: FloatFilter<"Waypoint"> | number
    lng?: FloatFilter<"Waypoint"> | number
    order?: IntFilter<"Waypoint"> | number
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
  }

  export type WaypointOrderByWithRelationInput = {
    id?: SortOrder
    tripId?: SortOrder
    label?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    order?: SortOrder
    trip?: TripOrderByWithRelationInput
  }

  export type WaypointWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WaypointWhereInput | WaypointWhereInput[]
    OR?: WaypointWhereInput[]
    NOT?: WaypointWhereInput | WaypointWhereInput[]
    tripId?: UuidFilter<"Waypoint"> | string
    label?: StringFilter<"Waypoint"> | string
    lat?: FloatFilter<"Waypoint"> | number
    lng?: FloatFilter<"Waypoint"> | number
    order?: IntFilter<"Waypoint"> | number
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
  }, "id">

  export type WaypointOrderByWithAggregationInput = {
    id?: SortOrder
    tripId?: SortOrder
    label?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    order?: SortOrder
    _count?: WaypointCountOrderByAggregateInput
    _avg?: WaypointAvgOrderByAggregateInput
    _max?: WaypointMaxOrderByAggregateInput
    _min?: WaypointMinOrderByAggregateInput
    _sum?: WaypointSumOrderByAggregateInput
  }

  export type WaypointScalarWhereWithAggregatesInput = {
    AND?: WaypointScalarWhereWithAggregatesInput | WaypointScalarWhereWithAggregatesInput[]
    OR?: WaypointScalarWhereWithAggregatesInput[]
    NOT?: WaypointScalarWhereWithAggregatesInput | WaypointScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Waypoint"> | string
    tripId?: UuidWithAggregatesFilter<"Waypoint"> | string
    label?: StringWithAggregatesFilter<"Waypoint"> | string
    lat?: FloatWithAggregatesFilter<"Waypoint"> | number
    lng?: FloatWithAggregatesFilter<"Waypoint"> | number
    order?: IntWithAggregatesFilter<"Waypoint"> | number
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: UuidFilter<"Booking"> | string
    tripId?: UuidFilter<"Booking"> | string
    passengerId?: UuidFilter<"Booking"> | string
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    seats?: IntFilter<"Booking"> | number
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
    passenger?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    tripId?: SortOrder
    passengerId?: SortOrder
    status?: SortOrder
    seats?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    trip?: TripOrderByWithRelationInput
    passenger?: UserOrderByWithRelationInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tripId_passengerId?: BookingTripIdPassengerIdCompoundUniqueInput
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    tripId?: UuidFilter<"Booking"> | string
    passengerId?: UuidFilter<"Booking"> | string
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    seats?: IntFilter<"Booking"> | number
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
    passenger?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "tripId_passengerId">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    tripId?: SortOrder
    passengerId?: SortOrder
    status?: SortOrder
    seats?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BookingCountOrderByAggregateInput
    _avg?: BookingAvgOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
    _sum?: BookingSumOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Booking"> | string
    tripId?: UuidWithAggregatesFilter<"Booking"> | string
    passengerId?: UuidWithAggregatesFilter<"Booking"> | string
    status?: EnumBookingStatusWithAggregatesFilter<"Booking"> | $Enums.BookingStatus
    seats?: IntWithAggregatesFilter<"Booking"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
  }

  export type RatingWhereInput = {
    AND?: RatingWhereInput | RatingWhereInput[]
    OR?: RatingWhereInput[]
    NOT?: RatingWhereInput | RatingWhereInput[]
    id?: UuidFilter<"Rating"> | string
    tripId?: UuidFilter<"Rating"> | string
    authorId?: UuidFilter<"Rating"> | string
    targetId?: UuidFilter<"Rating"> | string
    score?: IntFilter<"Rating"> | number
    comment?: StringNullableFilter<"Rating"> | string | null
    createdAt?: DateTimeFilter<"Rating"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    target?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RatingOrderByWithRelationInput = {
    id?: SortOrder
    tripId?: SortOrder
    authorId?: SortOrder
    targetId?: SortOrder
    score?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    author?: UserOrderByWithRelationInput
    target?: UserOrderByWithRelationInput
  }

  export type RatingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RatingWhereInput | RatingWhereInput[]
    OR?: RatingWhereInput[]
    NOT?: RatingWhereInput | RatingWhereInput[]
    tripId?: UuidFilter<"Rating"> | string
    authorId?: UuidFilter<"Rating"> | string
    targetId?: UuidFilter<"Rating"> | string
    score?: IntFilter<"Rating"> | number
    comment?: StringNullableFilter<"Rating"> | string | null
    createdAt?: DateTimeFilter<"Rating"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    target?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type RatingOrderByWithAggregationInput = {
    id?: SortOrder
    tripId?: SortOrder
    authorId?: SortOrder
    targetId?: SortOrder
    score?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: RatingCountOrderByAggregateInput
    _avg?: RatingAvgOrderByAggregateInput
    _max?: RatingMaxOrderByAggregateInput
    _min?: RatingMinOrderByAggregateInput
    _sum?: RatingSumOrderByAggregateInput
  }

  export type RatingScalarWhereWithAggregatesInput = {
    AND?: RatingScalarWhereWithAggregatesInput | RatingScalarWhereWithAggregatesInput[]
    OR?: RatingScalarWhereWithAggregatesInput[]
    NOT?: RatingScalarWhereWithAggregatesInput | RatingScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Rating"> | string
    tripId?: UuidWithAggregatesFilter<"Rating"> | string
    authorId?: UuidWithAggregatesFilter<"Rating"> | string
    targetId?: UuidWithAggregatesFilter<"Rating"> | string
    score?: IntWithAggregatesFilter<"Rating"> | number
    comment?: StringNullableWithAggregatesFilter<"Rating"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Rating"> | Date | string
  }

  export type DeviceWhereInput = {
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    id?: UuidFilter<"Device"> | string
    ownerId?: UuidFilter<"Device"> | string
    token?: StringFilter<"Device"> | string
    platform?: StringNullableFilter<"Device"> | string | null
    createdAt?: DateTimeFilter<"Device"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DeviceOrderByWithRelationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    token?: SortOrder
    platform?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    owner?: UserOrderByWithRelationInput
  }

  export type DeviceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    ownerId?: UuidFilter<"Device"> | string
    token?: StringFilter<"Device"> | string
    platform?: StringNullableFilter<"Device"> | string | null
    createdAt?: DateTimeFilter<"Device"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type DeviceOrderByWithAggregationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    token?: SortOrder
    platform?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: DeviceCountOrderByAggregateInput
    _max?: DeviceMaxOrderByAggregateInput
    _min?: DeviceMinOrderByAggregateInput
  }

  export type DeviceScalarWhereWithAggregatesInput = {
    AND?: DeviceScalarWhereWithAggregatesInput | DeviceScalarWhereWithAggregatesInput[]
    OR?: DeviceScalarWhereWithAggregatesInput[]
    NOT?: DeviceScalarWhereWithAggregatesInput | DeviceScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Device"> | string
    ownerId?: UuidWithAggregatesFilter<"Device"> | string
    token?: StringWithAggregatesFilter<"Device"> | string
    platform?: StringNullableWithAggregatesFilter<"Device"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Device"> | Date | string
  }

  export type ReportWhereInput = {
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    id?: UuidFilter<"Report"> | string
    authorId?: UuidFilter<"Report"> | string
    targetId?: UuidFilter<"Report"> | string
    reason?: StringFilter<"Report"> | string
    status?: EnumReportStatusFilter<"Report"> | $Enums.ReportStatus
    createdAt?: DateTimeFilter<"Report"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    target?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ReportOrderByWithRelationInput = {
    id?: SortOrder
    authorId?: SortOrder
    targetId?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    author?: UserOrderByWithRelationInput
    target?: UserOrderByWithRelationInput
  }

  export type ReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    authorId?: UuidFilter<"Report"> | string
    targetId?: UuidFilter<"Report"> | string
    reason?: StringFilter<"Report"> | string
    status?: EnumReportStatusFilter<"Report"> | $Enums.ReportStatus
    createdAt?: DateTimeFilter<"Report"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    target?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ReportOrderByWithAggregationInput = {
    id?: SortOrder
    authorId?: SortOrder
    targetId?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: ReportCountOrderByAggregateInput
    _max?: ReportMaxOrderByAggregateInput
    _min?: ReportMinOrderByAggregateInput
  }

  export type ReportScalarWhereWithAggregatesInput = {
    AND?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    OR?: ReportScalarWhereWithAggregatesInput[]
    NOT?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Report"> | string
    authorId?: UuidWithAggregatesFilter<"Report"> | string
    targetId?: UuidWithAggregatesFilter<"Report"> | string
    reason?: StringWithAggregatesFilter<"Report"> | string
    status?: EnumReportStatusWithAggregatesFilter<"Report"> | $Enums.ReportStatus
    createdAt?: DateTimeWithAggregatesFilter<"Report"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    phone: string
    fullName?: string | null
    photoUrl?: string | null
    rating?: number
    tripsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: VehicleCreateNestedManyWithoutOwnerInput
    tripsDriven?: TripCreateNestedManyWithoutDriverInput
    tripsBooked?: BookingCreateNestedManyWithoutPassengerInput
    ratingsGiven?: RatingCreateNestedManyWithoutAuthorInput
    ratingsReceived?: RatingCreateNestedManyWithoutTargetInput
    reportsMade?: ReportCreateNestedManyWithoutAuthorInput
    reportsReceived?: ReportCreateNestedManyWithoutTargetInput
    devices?: DeviceCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    phone: string
    fullName?: string | null
    photoUrl?: string | null
    rating?: number
    tripsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: VehicleUncheckedCreateNestedManyWithoutOwnerInput
    tripsDriven?: TripUncheckedCreateNestedManyWithoutDriverInput
    tripsBooked?: BookingUncheckedCreateNestedManyWithoutPassengerInput
    ratingsGiven?: RatingUncheckedCreateNestedManyWithoutAuthorInput
    ratingsReceived?: RatingUncheckedCreateNestedManyWithoutTargetInput
    reportsMade?: ReportUncheckedCreateNestedManyWithoutAuthorInput
    reportsReceived?: ReportUncheckedCreateNestedManyWithoutTargetInput
    devices?: DeviceUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    tripsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehicleUpdateManyWithoutOwnerNestedInput
    tripsDriven?: TripUpdateManyWithoutDriverNestedInput
    tripsBooked?: BookingUpdateManyWithoutPassengerNestedInput
    ratingsGiven?: RatingUpdateManyWithoutAuthorNestedInput
    ratingsReceived?: RatingUpdateManyWithoutTargetNestedInput
    reportsMade?: ReportUpdateManyWithoutAuthorNestedInput
    reportsReceived?: ReportUpdateManyWithoutTargetNestedInput
    devices?: DeviceUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    tripsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehicleUncheckedUpdateManyWithoutOwnerNestedInput
    tripsDriven?: TripUncheckedUpdateManyWithoutDriverNestedInput
    tripsBooked?: BookingUncheckedUpdateManyWithoutPassengerNestedInput
    ratingsGiven?: RatingUncheckedUpdateManyWithoutAuthorNestedInput
    ratingsReceived?: RatingUncheckedUpdateManyWithoutTargetNestedInput
    reportsMade?: ReportUncheckedUpdateManyWithoutAuthorNestedInput
    reportsReceived?: ReportUncheckedUpdateManyWithoutTargetNestedInput
    devices?: DeviceUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    phone: string
    fullName?: string | null
    photoUrl?: string | null
    rating?: number
    tripsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    tripsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    tripsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleCreateInput = {
    id?: string
    model: string
    plate: string
    color?: string | null
    seats?: number
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutVehiclesInput
    trips?: TripCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateInput = {
    id?: string
    ownerId: string
    model: string
    plate: string
    color?: string | null
    seats?: number
    createdAt?: Date | string
    trips?: TripUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    plate?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    seats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutVehiclesNestedInput
    trips?: TripUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    plate?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    seats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: TripUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleCreateManyInput = {
    id?: string
    ownerId: string
    model: string
    plate: string
    color?: string | null
    seats?: number
    createdAt?: Date | string
  }

  export type VehicleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    plate?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    seats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    plate?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    seats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripCreateInput = {
    id?: string
    fromLabel: string
    toLabel: string
    fromLat: number
    fromLng: number
    toLat: number
    toLng: number
    departureTime: Date | string
    arrivalTime?: Date | string | null
    contribution?: number
    seats?: number
    isRecurring?: boolean
    status?: $Enums.TripStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    driver: UserCreateNestedOneWithoutTripsDrivenInput
    vehicle: VehicleCreateNestedOneWithoutTripsInput
    waypoints?: WaypointCreateNestedManyWithoutTripInput
    bookings?: BookingCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateInput = {
    id?: string
    driverId: string
    vehicleId: string
    fromLabel: string
    toLabel: string
    fromLat: number
    fromLng: number
    toLat: number
    toLng: number
    departureTime: Date | string
    arrivalTime?: Date | string | null
    contribution?: number
    seats?: number
    isRecurring?: boolean
    status?: $Enums.TripStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    waypoints?: WaypointUncheckedCreateNestedManyWithoutTripInput
    bookings?: BookingUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromLabel?: StringFieldUpdateOperationsInput | string
    toLabel?: StringFieldUpdateOperationsInput | string
    fromLat?: FloatFieldUpdateOperationsInput | number
    fromLng?: FloatFieldUpdateOperationsInput | number
    toLat?: FloatFieldUpdateOperationsInput | number
    toLng?: FloatFieldUpdateOperationsInput | number
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contribution?: IntFieldUpdateOperationsInput | number
    seats?: IntFieldUpdateOperationsInput | number
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driver?: UserUpdateOneRequiredWithoutTripsDrivenNestedInput
    vehicle?: VehicleUpdateOneRequiredWithoutTripsNestedInput
    waypoints?: WaypointUpdateManyWithoutTripNestedInput
    bookings?: BookingUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    fromLabel?: StringFieldUpdateOperationsInput | string
    toLabel?: StringFieldUpdateOperationsInput | string
    fromLat?: FloatFieldUpdateOperationsInput | number
    fromLng?: FloatFieldUpdateOperationsInput | number
    toLat?: FloatFieldUpdateOperationsInput | number
    toLng?: FloatFieldUpdateOperationsInput | number
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contribution?: IntFieldUpdateOperationsInput | number
    seats?: IntFieldUpdateOperationsInput | number
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    waypoints?: WaypointUncheckedUpdateManyWithoutTripNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutTripNestedInput
  }

  export type TripCreateManyInput = {
    id?: string
    driverId: string
    vehicleId: string
    fromLabel: string
    toLabel: string
    fromLat: number
    fromLng: number
    toLat: number
    toLng: number
    departureTime: Date | string
    arrivalTime?: Date | string | null
    contribution?: number
    seats?: number
    isRecurring?: boolean
    status?: $Enums.TripStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromLabel?: StringFieldUpdateOperationsInput | string
    toLabel?: StringFieldUpdateOperationsInput | string
    fromLat?: FloatFieldUpdateOperationsInput | number
    fromLng?: FloatFieldUpdateOperationsInput | number
    toLat?: FloatFieldUpdateOperationsInput | number
    toLng?: FloatFieldUpdateOperationsInput | number
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contribution?: IntFieldUpdateOperationsInput | number
    seats?: IntFieldUpdateOperationsInput | number
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    fromLabel?: StringFieldUpdateOperationsInput | string
    toLabel?: StringFieldUpdateOperationsInput | string
    fromLat?: FloatFieldUpdateOperationsInput | number
    fromLng?: FloatFieldUpdateOperationsInput | number
    toLat?: FloatFieldUpdateOperationsInput | number
    toLng?: FloatFieldUpdateOperationsInput | number
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contribution?: IntFieldUpdateOperationsInput | number
    seats?: IntFieldUpdateOperationsInput | number
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaypointCreateInput = {
    id?: string
    label: string
    lat: number
    lng: number
    order: number
    trip: TripCreateNestedOneWithoutWaypointsInput
  }

  export type WaypointUncheckedCreateInput = {
    id?: string
    tripId: string
    label: string
    lat: number
    lng: number
    order: number
  }

  export type WaypointUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    trip?: TripUpdateOneRequiredWithoutWaypointsNestedInput
  }

  export type WaypointUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
  }

  export type WaypointCreateManyInput = {
    id?: string
    tripId: string
    label: string
    lat: number
    lng: number
    order: number
  }

  export type WaypointUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
  }

  export type WaypointUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
  }

  export type BookingCreateInput = {
    id?: string
    status?: $Enums.BookingStatus
    seats?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    trip: TripCreateNestedOneWithoutBookingsInput
    passenger: UserCreateNestedOneWithoutTripsBookedInput
  }

  export type BookingUncheckedCreateInput = {
    id?: string
    tripId: string
    passengerId: string
    status?: $Enums.BookingStatus
    seats?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    seats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trip?: TripUpdateOneRequiredWithoutBookingsNestedInput
    passenger?: UserUpdateOneRequiredWithoutTripsBookedNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    passengerId?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    seats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManyInput = {
    id?: string
    tripId: string
    passengerId: string
    status?: $Enums.BookingStatus
    seats?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    seats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    passengerId?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    seats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingCreateInput = {
    id?: string
    tripId: string
    score: number
    comment?: string | null
    createdAt?: Date | string
    author: UserCreateNestedOneWithoutRatingsGivenInput
    target: UserCreateNestedOneWithoutRatingsReceivedInput
  }

  export type RatingUncheckedCreateInput = {
    id?: string
    tripId: string
    authorId: string
    targetId: string
    score: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type RatingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutRatingsGivenNestedInput
    target?: UserUpdateOneRequiredWithoutRatingsReceivedNestedInput
  }

  export type RatingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingCreateManyInput = {
    id?: string
    tripId: string
    authorId: string
    targetId: string
    score: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type RatingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceCreateInput = {
    id?: string
    token: string
    platform?: string | null
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutDevicesInput
  }

  export type DeviceUncheckedCreateInput = {
    id?: string
    ownerId: string
    token: string
    platform?: string | null
    createdAt?: Date | string
  }

  export type DeviceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutDevicesNestedInput
  }

  export type DeviceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceCreateManyInput = {
    id?: string
    ownerId: string
    token: string
    platform?: string | null
    createdAt?: Date | string
  }

  export type DeviceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportCreateInput = {
    id?: string
    reason: string
    status?: $Enums.ReportStatus
    createdAt?: Date | string
    author: UserCreateNestedOneWithoutReportsMadeInput
    target: UserCreateNestedOneWithoutReportsReceivedInput
  }

  export type ReportUncheckedCreateInput = {
    id?: string
    authorId: string
    targetId: string
    reason: string
    status?: $Enums.ReportStatus
    createdAt?: Date | string
  }

  export type ReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutReportsMadeNestedInput
    target?: UserUpdateOneRequiredWithoutReportsReceivedNestedInput
  }

  export type ReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportCreateManyInput = {
    id?: string
    authorId: string
    targetId: string
    reason: string
    status?: $Enums.ReportStatus
    createdAt?: Date | string
  }

  export type ReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type VehicleListRelationFilter = {
    every?: VehicleWhereInput
    some?: VehicleWhereInput
    none?: VehicleWhereInput
  }

  export type TripListRelationFilter = {
    every?: TripWhereInput
    some?: TripWhereInput
    none?: TripWhereInput
  }

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type RatingListRelationFilter = {
    every?: RatingWhereInput
    some?: RatingWhereInput
    none?: RatingWhereInput
  }

  export type ReportListRelationFilter = {
    every?: ReportWhereInput
    some?: ReportWhereInput
    none?: ReportWhereInput
  }

  export type DeviceListRelationFilter = {
    every?: DeviceWhereInput
    some?: DeviceWhereInput
    none?: DeviceWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type VehicleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TripOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RatingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeviceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    fullName?: SortOrder
    photoUrl?: SortOrder
    rating?: SortOrder
    tripsCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    rating?: SortOrder
    tripsCount?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    fullName?: SortOrder
    photoUrl?: SortOrder
    rating?: SortOrder
    tripsCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    fullName?: SortOrder
    photoUrl?: SortOrder
    rating?: SortOrder
    tripsCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    rating?: SortOrder
    tripsCount?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type VehicleCountOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    model?: SortOrder
    plate?: SortOrder
    color?: SortOrder
    seats?: SortOrder
    createdAt?: SortOrder
  }

  export type VehicleAvgOrderByAggregateInput = {
    seats?: SortOrder
  }

  export type VehicleMaxOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    model?: SortOrder
    plate?: SortOrder
    color?: SortOrder
    seats?: SortOrder
    createdAt?: SortOrder
  }

  export type VehicleMinOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    model?: SortOrder
    plate?: SortOrder
    color?: SortOrder
    seats?: SortOrder
    createdAt?: SortOrder
  }

  export type VehicleSumOrderByAggregateInput = {
    seats?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumTripStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TripStatus | EnumTripStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TripStatus[] | ListEnumTripStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TripStatus[] | ListEnumTripStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTripStatusFilter<$PrismaModel> | $Enums.TripStatus
  }

  export type VehicleScalarRelationFilter = {
    is?: VehicleWhereInput
    isNot?: VehicleWhereInput
  }

  export type WaypointListRelationFilter = {
    every?: WaypointWhereInput
    some?: WaypointWhereInput
    none?: WaypointWhereInput
  }

  export type WaypointOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TripCountOrderByAggregateInput = {
    id?: SortOrder
    driverId?: SortOrder
    vehicleId?: SortOrder
    fromLabel?: SortOrder
    toLabel?: SortOrder
    fromLat?: SortOrder
    fromLng?: SortOrder
    toLat?: SortOrder
    toLng?: SortOrder
    departureTime?: SortOrder
    arrivalTime?: SortOrder
    contribution?: SortOrder
    seats?: SortOrder
    isRecurring?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TripAvgOrderByAggregateInput = {
    fromLat?: SortOrder
    fromLng?: SortOrder
    toLat?: SortOrder
    toLng?: SortOrder
    contribution?: SortOrder
    seats?: SortOrder
  }

  export type TripMaxOrderByAggregateInput = {
    id?: SortOrder
    driverId?: SortOrder
    vehicleId?: SortOrder
    fromLabel?: SortOrder
    toLabel?: SortOrder
    fromLat?: SortOrder
    fromLng?: SortOrder
    toLat?: SortOrder
    toLng?: SortOrder
    departureTime?: SortOrder
    arrivalTime?: SortOrder
    contribution?: SortOrder
    seats?: SortOrder
    isRecurring?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TripMinOrderByAggregateInput = {
    id?: SortOrder
    driverId?: SortOrder
    vehicleId?: SortOrder
    fromLabel?: SortOrder
    toLabel?: SortOrder
    fromLat?: SortOrder
    fromLng?: SortOrder
    toLat?: SortOrder
    toLng?: SortOrder
    departureTime?: SortOrder
    arrivalTime?: SortOrder
    contribution?: SortOrder
    seats?: SortOrder
    isRecurring?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TripSumOrderByAggregateInput = {
    fromLat?: SortOrder
    fromLng?: SortOrder
    toLat?: SortOrder
    toLng?: SortOrder
    contribution?: SortOrder
    seats?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumTripStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TripStatus | EnumTripStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TripStatus[] | ListEnumTripStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TripStatus[] | ListEnumTripStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTripStatusWithAggregatesFilter<$PrismaModel> | $Enums.TripStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTripStatusFilter<$PrismaModel>
    _max?: NestedEnumTripStatusFilter<$PrismaModel>
  }

  export type TripScalarRelationFilter = {
    is?: TripWhereInput
    isNot?: TripWhereInput
  }

  export type WaypointCountOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    label?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    order?: SortOrder
  }

  export type WaypointAvgOrderByAggregateInput = {
    lat?: SortOrder
    lng?: SortOrder
    order?: SortOrder
  }

  export type WaypointMaxOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    label?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    order?: SortOrder
  }

  export type WaypointMinOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    label?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    order?: SortOrder
  }

  export type WaypointSumOrderByAggregateInput = {
    lat?: SortOrder
    lng?: SortOrder
    order?: SortOrder
  }

  export type EnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type BookingTripIdPassengerIdCompoundUniqueInput = {
    tripId: string
    passengerId: string
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    passengerId?: SortOrder
    status?: SortOrder
    seats?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingAvgOrderByAggregateInput = {
    seats?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    passengerId?: SortOrder
    status?: SortOrder
    seats?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    passengerId?: SortOrder
    status?: SortOrder
    seats?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingSumOrderByAggregateInput = {
    seats?: SortOrder
  }

  export type EnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type RatingCountOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    authorId?: SortOrder
    targetId?: SortOrder
    score?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type RatingAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type RatingMaxOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    authorId?: SortOrder
    targetId?: SortOrder
    score?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type RatingMinOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    authorId?: SortOrder
    targetId?: SortOrder
    score?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type RatingSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type DeviceCountOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    token?: SortOrder
    platform?: SortOrder
    createdAt?: SortOrder
  }

  export type DeviceMaxOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    token?: SortOrder
    platform?: SortOrder
    createdAt?: SortOrder
  }

  export type DeviceMinOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    token?: SortOrder
    platform?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumReportStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportStatus | EnumReportStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReportStatusFilter<$PrismaModel> | $Enums.ReportStatus
  }

  export type ReportCountOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    targetId?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ReportMaxOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    targetId?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ReportMinOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    targetId?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumReportStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportStatus | EnumReportStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReportStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReportStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReportStatusFilter<$PrismaModel>
    _max?: NestedEnumReportStatusFilter<$PrismaModel>
  }

  export type VehicleCreateNestedManyWithoutOwnerInput = {
    create?: XOR<VehicleCreateWithoutOwnerInput, VehicleUncheckedCreateWithoutOwnerInput> | VehicleCreateWithoutOwnerInput[] | VehicleUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutOwnerInput | VehicleCreateOrConnectWithoutOwnerInput[]
    createMany?: VehicleCreateManyOwnerInputEnvelope
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
  }

  export type TripCreateNestedManyWithoutDriverInput = {
    create?: XOR<TripCreateWithoutDriverInput, TripUncheckedCreateWithoutDriverInput> | TripCreateWithoutDriverInput[] | TripUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: TripCreateOrConnectWithoutDriverInput | TripCreateOrConnectWithoutDriverInput[]
    createMany?: TripCreateManyDriverInputEnvelope
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutPassengerInput = {
    create?: XOR<BookingCreateWithoutPassengerInput, BookingUncheckedCreateWithoutPassengerInput> | BookingCreateWithoutPassengerInput[] | BookingUncheckedCreateWithoutPassengerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutPassengerInput | BookingCreateOrConnectWithoutPassengerInput[]
    createMany?: BookingCreateManyPassengerInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type RatingCreateNestedManyWithoutAuthorInput = {
    create?: XOR<RatingCreateWithoutAuthorInput, RatingUncheckedCreateWithoutAuthorInput> | RatingCreateWithoutAuthorInput[] | RatingUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutAuthorInput | RatingCreateOrConnectWithoutAuthorInput[]
    createMany?: RatingCreateManyAuthorInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type RatingCreateNestedManyWithoutTargetInput = {
    create?: XOR<RatingCreateWithoutTargetInput, RatingUncheckedCreateWithoutTargetInput> | RatingCreateWithoutTargetInput[] | RatingUncheckedCreateWithoutTargetInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutTargetInput | RatingCreateOrConnectWithoutTargetInput[]
    createMany?: RatingCreateManyTargetInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type ReportCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ReportCreateWithoutAuthorInput, ReportUncheckedCreateWithoutAuthorInput> | ReportCreateWithoutAuthorInput[] | ReportUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutAuthorInput | ReportCreateOrConnectWithoutAuthorInput[]
    createMany?: ReportCreateManyAuthorInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type ReportCreateNestedManyWithoutTargetInput = {
    create?: XOR<ReportCreateWithoutTargetInput, ReportUncheckedCreateWithoutTargetInput> | ReportCreateWithoutTargetInput[] | ReportUncheckedCreateWithoutTargetInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutTargetInput | ReportCreateOrConnectWithoutTargetInput[]
    createMany?: ReportCreateManyTargetInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type DeviceCreateNestedManyWithoutOwnerInput = {
    create?: XOR<DeviceCreateWithoutOwnerInput, DeviceUncheckedCreateWithoutOwnerInput> | DeviceCreateWithoutOwnerInput[] | DeviceUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutOwnerInput | DeviceCreateOrConnectWithoutOwnerInput[]
    createMany?: DeviceCreateManyOwnerInputEnvelope
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
  }

  export type VehicleUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<VehicleCreateWithoutOwnerInput, VehicleUncheckedCreateWithoutOwnerInput> | VehicleCreateWithoutOwnerInput[] | VehicleUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutOwnerInput | VehicleCreateOrConnectWithoutOwnerInput[]
    createMany?: VehicleCreateManyOwnerInputEnvelope
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
  }

  export type TripUncheckedCreateNestedManyWithoutDriverInput = {
    create?: XOR<TripCreateWithoutDriverInput, TripUncheckedCreateWithoutDriverInput> | TripCreateWithoutDriverInput[] | TripUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: TripCreateOrConnectWithoutDriverInput | TripCreateOrConnectWithoutDriverInput[]
    createMany?: TripCreateManyDriverInputEnvelope
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutPassengerInput = {
    create?: XOR<BookingCreateWithoutPassengerInput, BookingUncheckedCreateWithoutPassengerInput> | BookingCreateWithoutPassengerInput[] | BookingUncheckedCreateWithoutPassengerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutPassengerInput | BookingCreateOrConnectWithoutPassengerInput[]
    createMany?: BookingCreateManyPassengerInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type RatingUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<RatingCreateWithoutAuthorInput, RatingUncheckedCreateWithoutAuthorInput> | RatingCreateWithoutAuthorInput[] | RatingUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutAuthorInput | RatingCreateOrConnectWithoutAuthorInput[]
    createMany?: RatingCreateManyAuthorInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type RatingUncheckedCreateNestedManyWithoutTargetInput = {
    create?: XOR<RatingCreateWithoutTargetInput, RatingUncheckedCreateWithoutTargetInput> | RatingCreateWithoutTargetInput[] | RatingUncheckedCreateWithoutTargetInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutTargetInput | RatingCreateOrConnectWithoutTargetInput[]
    createMany?: RatingCreateManyTargetInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type ReportUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ReportCreateWithoutAuthorInput, ReportUncheckedCreateWithoutAuthorInput> | ReportCreateWithoutAuthorInput[] | ReportUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutAuthorInput | ReportCreateOrConnectWithoutAuthorInput[]
    createMany?: ReportCreateManyAuthorInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type ReportUncheckedCreateNestedManyWithoutTargetInput = {
    create?: XOR<ReportCreateWithoutTargetInput, ReportUncheckedCreateWithoutTargetInput> | ReportCreateWithoutTargetInput[] | ReportUncheckedCreateWithoutTargetInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutTargetInput | ReportCreateOrConnectWithoutTargetInput[]
    createMany?: ReportCreateManyTargetInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type DeviceUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<DeviceCreateWithoutOwnerInput, DeviceUncheckedCreateWithoutOwnerInput> | DeviceCreateWithoutOwnerInput[] | DeviceUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutOwnerInput | DeviceCreateOrConnectWithoutOwnerInput[]
    createMany?: DeviceCreateManyOwnerInputEnvelope
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type VehicleUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<VehicleCreateWithoutOwnerInput, VehicleUncheckedCreateWithoutOwnerInput> | VehicleCreateWithoutOwnerInput[] | VehicleUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutOwnerInput | VehicleCreateOrConnectWithoutOwnerInput[]
    upsert?: VehicleUpsertWithWhereUniqueWithoutOwnerInput | VehicleUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: VehicleCreateManyOwnerInputEnvelope
    set?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    disconnect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    delete?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    update?: VehicleUpdateWithWhereUniqueWithoutOwnerInput | VehicleUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: VehicleUpdateManyWithWhereWithoutOwnerInput | VehicleUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
  }

  export type TripUpdateManyWithoutDriverNestedInput = {
    create?: XOR<TripCreateWithoutDriverInput, TripUncheckedCreateWithoutDriverInput> | TripCreateWithoutDriverInput[] | TripUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: TripCreateOrConnectWithoutDriverInput | TripCreateOrConnectWithoutDriverInput[]
    upsert?: TripUpsertWithWhereUniqueWithoutDriverInput | TripUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: TripCreateManyDriverInputEnvelope
    set?: TripWhereUniqueInput | TripWhereUniqueInput[]
    disconnect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    delete?: TripWhereUniqueInput | TripWhereUniqueInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    update?: TripUpdateWithWhereUniqueWithoutDriverInput | TripUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: TripUpdateManyWithWhereWithoutDriverInput | TripUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: TripScalarWhereInput | TripScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutPassengerNestedInput = {
    create?: XOR<BookingCreateWithoutPassengerInput, BookingUncheckedCreateWithoutPassengerInput> | BookingCreateWithoutPassengerInput[] | BookingUncheckedCreateWithoutPassengerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutPassengerInput | BookingCreateOrConnectWithoutPassengerInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutPassengerInput | BookingUpsertWithWhereUniqueWithoutPassengerInput[]
    createMany?: BookingCreateManyPassengerInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutPassengerInput | BookingUpdateWithWhereUniqueWithoutPassengerInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutPassengerInput | BookingUpdateManyWithWhereWithoutPassengerInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type RatingUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<RatingCreateWithoutAuthorInput, RatingUncheckedCreateWithoutAuthorInput> | RatingCreateWithoutAuthorInput[] | RatingUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutAuthorInput | RatingCreateOrConnectWithoutAuthorInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutAuthorInput | RatingUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: RatingCreateManyAuthorInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutAuthorInput | RatingUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutAuthorInput | RatingUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type RatingUpdateManyWithoutTargetNestedInput = {
    create?: XOR<RatingCreateWithoutTargetInput, RatingUncheckedCreateWithoutTargetInput> | RatingCreateWithoutTargetInput[] | RatingUncheckedCreateWithoutTargetInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutTargetInput | RatingCreateOrConnectWithoutTargetInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutTargetInput | RatingUpsertWithWhereUniqueWithoutTargetInput[]
    createMany?: RatingCreateManyTargetInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutTargetInput | RatingUpdateWithWhereUniqueWithoutTargetInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutTargetInput | RatingUpdateManyWithWhereWithoutTargetInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type ReportUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ReportCreateWithoutAuthorInput, ReportUncheckedCreateWithoutAuthorInput> | ReportCreateWithoutAuthorInput[] | ReportUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutAuthorInput | ReportCreateOrConnectWithoutAuthorInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutAuthorInput | ReportUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ReportCreateManyAuthorInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutAuthorInput | ReportUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutAuthorInput | ReportUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type ReportUpdateManyWithoutTargetNestedInput = {
    create?: XOR<ReportCreateWithoutTargetInput, ReportUncheckedCreateWithoutTargetInput> | ReportCreateWithoutTargetInput[] | ReportUncheckedCreateWithoutTargetInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutTargetInput | ReportCreateOrConnectWithoutTargetInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutTargetInput | ReportUpsertWithWhereUniqueWithoutTargetInput[]
    createMany?: ReportCreateManyTargetInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutTargetInput | ReportUpdateWithWhereUniqueWithoutTargetInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutTargetInput | ReportUpdateManyWithWhereWithoutTargetInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type DeviceUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<DeviceCreateWithoutOwnerInput, DeviceUncheckedCreateWithoutOwnerInput> | DeviceCreateWithoutOwnerInput[] | DeviceUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutOwnerInput | DeviceCreateOrConnectWithoutOwnerInput[]
    upsert?: DeviceUpsertWithWhereUniqueWithoutOwnerInput | DeviceUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: DeviceCreateManyOwnerInputEnvelope
    set?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    disconnect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    delete?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    update?: DeviceUpdateWithWhereUniqueWithoutOwnerInput | DeviceUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: DeviceUpdateManyWithWhereWithoutOwnerInput | DeviceUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
  }

  export type VehicleUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<VehicleCreateWithoutOwnerInput, VehicleUncheckedCreateWithoutOwnerInput> | VehicleCreateWithoutOwnerInput[] | VehicleUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutOwnerInput | VehicleCreateOrConnectWithoutOwnerInput[]
    upsert?: VehicleUpsertWithWhereUniqueWithoutOwnerInput | VehicleUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: VehicleCreateManyOwnerInputEnvelope
    set?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    disconnect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    delete?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    update?: VehicleUpdateWithWhereUniqueWithoutOwnerInput | VehicleUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: VehicleUpdateManyWithWhereWithoutOwnerInput | VehicleUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
  }

  export type TripUncheckedUpdateManyWithoutDriverNestedInput = {
    create?: XOR<TripCreateWithoutDriverInput, TripUncheckedCreateWithoutDriverInput> | TripCreateWithoutDriverInput[] | TripUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: TripCreateOrConnectWithoutDriverInput | TripCreateOrConnectWithoutDriverInput[]
    upsert?: TripUpsertWithWhereUniqueWithoutDriverInput | TripUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: TripCreateManyDriverInputEnvelope
    set?: TripWhereUniqueInput | TripWhereUniqueInput[]
    disconnect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    delete?: TripWhereUniqueInput | TripWhereUniqueInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    update?: TripUpdateWithWhereUniqueWithoutDriverInput | TripUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: TripUpdateManyWithWhereWithoutDriverInput | TripUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: TripScalarWhereInput | TripScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutPassengerNestedInput = {
    create?: XOR<BookingCreateWithoutPassengerInput, BookingUncheckedCreateWithoutPassengerInput> | BookingCreateWithoutPassengerInput[] | BookingUncheckedCreateWithoutPassengerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutPassengerInput | BookingCreateOrConnectWithoutPassengerInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutPassengerInput | BookingUpsertWithWhereUniqueWithoutPassengerInput[]
    createMany?: BookingCreateManyPassengerInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutPassengerInput | BookingUpdateWithWhereUniqueWithoutPassengerInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutPassengerInput | BookingUpdateManyWithWhereWithoutPassengerInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type RatingUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<RatingCreateWithoutAuthorInput, RatingUncheckedCreateWithoutAuthorInput> | RatingCreateWithoutAuthorInput[] | RatingUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutAuthorInput | RatingCreateOrConnectWithoutAuthorInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutAuthorInput | RatingUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: RatingCreateManyAuthorInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutAuthorInput | RatingUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutAuthorInput | RatingUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type RatingUncheckedUpdateManyWithoutTargetNestedInput = {
    create?: XOR<RatingCreateWithoutTargetInput, RatingUncheckedCreateWithoutTargetInput> | RatingCreateWithoutTargetInput[] | RatingUncheckedCreateWithoutTargetInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutTargetInput | RatingCreateOrConnectWithoutTargetInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutTargetInput | RatingUpsertWithWhereUniqueWithoutTargetInput[]
    createMany?: RatingCreateManyTargetInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutTargetInput | RatingUpdateWithWhereUniqueWithoutTargetInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutTargetInput | RatingUpdateManyWithWhereWithoutTargetInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type ReportUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ReportCreateWithoutAuthorInput, ReportUncheckedCreateWithoutAuthorInput> | ReportCreateWithoutAuthorInput[] | ReportUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutAuthorInput | ReportCreateOrConnectWithoutAuthorInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutAuthorInput | ReportUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ReportCreateManyAuthorInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutAuthorInput | ReportUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutAuthorInput | ReportUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type ReportUncheckedUpdateManyWithoutTargetNestedInput = {
    create?: XOR<ReportCreateWithoutTargetInput, ReportUncheckedCreateWithoutTargetInput> | ReportCreateWithoutTargetInput[] | ReportUncheckedCreateWithoutTargetInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutTargetInput | ReportCreateOrConnectWithoutTargetInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutTargetInput | ReportUpsertWithWhereUniqueWithoutTargetInput[]
    createMany?: ReportCreateManyTargetInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutTargetInput | ReportUpdateWithWhereUniqueWithoutTargetInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutTargetInput | ReportUpdateManyWithWhereWithoutTargetInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type DeviceUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<DeviceCreateWithoutOwnerInput, DeviceUncheckedCreateWithoutOwnerInput> | DeviceCreateWithoutOwnerInput[] | DeviceUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutOwnerInput | DeviceCreateOrConnectWithoutOwnerInput[]
    upsert?: DeviceUpsertWithWhereUniqueWithoutOwnerInput | DeviceUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: DeviceCreateManyOwnerInputEnvelope
    set?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    disconnect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    delete?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    update?: DeviceUpdateWithWhereUniqueWithoutOwnerInput | DeviceUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: DeviceUpdateManyWithWhereWithoutOwnerInput | DeviceUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutVehiclesInput = {
    create?: XOR<UserCreateWithoutVehiclesInput, UserUncheckedCreateWithoutVehiclesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVehiclesInput
    connect?: UserWhereUniqueInput
  }

  export type TripCreateNestedManyWithoutVehicleInput = {
    create?: XOR<TripCreateWithoutVehicleInput, TripUncheckedCreateWithoutVehicleInput> | TripCreateWithoutVehicleInput[] | TripUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: TripCreateOrConnectWithoutVehicleInput | TripCreateOrConnectWithoutVehicleInput[]
    createMany?: TripCreateManyVehicleInputEnvelope
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
  }

  export type TripUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<TripCreateWithoutVehicleInput, TripUncheckedCreateWithoutVehicleInput> | TripCreateWithoutVehicleInput[] | TripUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: TripCreateOrConnectWithoutVehicleInput | TripCreateOrConnectWithoutVehicleInput[]
    createMany?: TripCreateManyVehicleInputEnvelope
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutVehiclesNestedInput = {
    create?: XOR<UserCreateWithoutVehiclesInput, UserUncheckedCreateWithoutVehiclesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVehiclesInput
    upsert?: UserUpsertWithoutVehiclesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVehiclesInput, UserUpdateWithoutVehiclesInput>, UserUncheckedUpdateWithoutVehiclesInput>
  }

  export type TripUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<TripCreateWithoutVehicleInput, TripUncheckedCreateWithoutVehicleInput> | TripCreateWithoutVehicleInput[] | TripUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: TripCreateOrConnectWithoutVehicleInput | TripCreateOrConnectWithoutVehicleInput[]
    upsert?: TripUpsertWithWhereUniqueWithoutVehicleInput | TripUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: TripCreateManyVehicleInputEnvelope
    set?: TripWhereUniqueInput | TripWhereUniqueInput[]
    disconnect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    delete?: TripWhereUniqueInput | TripWhereUniqueInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    update?: TripUpdateWithWhereUniqueWithoutVehicleInput | TripUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: TripUpdateManyWithWhereWithoutVehicleInput | TripUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: TripScalarWhereInput | TripScalarWhereInput[]
  }

  export type TripUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<TripCreateWithoutVehicleInput, TripUncheckedCreateWithoutVehicleInput> | TripCreateWithoutVehicleInput[] | TripUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: TripCreateOrConnectWithoutVehicleInput | TripCreateOrConnectWithoutVehicleInput[]
    upsert?: TripUpsertWithWhereUniqueWithoutVehicleInput | TripUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: TripCreateManyVehicleInputEnvelope
    set?: TripWhereUniqueInput | TripWhereUniqueInput[]
    disconnect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    delete?: TripWhereUniqueInput | TripWhereUniqueInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    update?: TripUpdateWithWhereUniqueWithoutVehicleInput | TripUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: TripUpdateManyWithWhereWithoutVehicleInput | TripUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: TripScalarWhereInput | TripScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTripsDrivenInput = {
    create?: XOR<UserCreateWithoutTripsDrivenInput, UserUncheckedCreateWithoutTripsDrivenInput>
    connectOrCreate?: UserCreateOrConnectWithoutTripsDrivenInput
    connect?: UserWhereUniqueInput
  }

  export type VehicleCreateNestedOneWithoutTripsInput = {
    create?: XOR<VehicleCreateWithoutTripsInput, VehicleUncheckedCreateWithoutTripsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutTripsInput
    connect?: VehicleWhereUniqueInput
  }

  export type WaypointCreateNestedManyWithoutTripInput = {
    create?: XOR<WaypointCreateWithoutTripInput, WaypointUncheckedCreateWithoutTripInput> | WaypointCreateWithoutTripInput[] | WaypointUncheckedCreateWithoutTripInput[]
    connectOrCreate?: WaypointCreateOrConnectWithoutTripInput | WaypointCreateOrConnectWithoutTripInput[]
    createMany?: WaypointCreateManyTripInputEnvelope
    connect?: WaypointWhereUniqueInput | WaypointWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutTripInput = {
    create?: XOR<BookingCreateWithoutTripInput, BookingUncheckedCreateWithoutTripInput> | BookingCreateWithoutTripInput[] | BookingUncheckedCreateWithoutTripInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutTripInput | BookingCreateOrConnectWithoutTripInput[]
    createMany?: BookingCreateManyTripInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type WaypointUncheckedCreateNestedManyWithoutTripInput = {
    create?: XOR<WaypointCreateWithoutTripInput, WaypointUncheckedCreateWithoutTripInput> | WaypointCreateWithoutTripInput[] | WaypointUncheckedCreateWithoutTripInput[]
    connectOrCreate?: WaypointCreateOrConnectWithoutTripInput | WaypointCreateOrConnectWithoutTripInput[]
    createMany?: WaypointCreateManyTripInputEnvelope
    connect?: WaypointWhereUniqueInput | WaypointWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutTripInput = {
    create?: XOR<BookingCreateWithoutTripInput, BookingUncheckedCreateWithoutTripInput> | BookingCreateWithoutTripInput[] | BookingUncheckedCreateWithoutTripInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutTripInput | BookingCreateOrConnectWithoutTripInput[]
    createMany?: BookingCreateManyTripInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumTripStatusFieldUpdateOperationsInput = {
    set?: $Enums.TripStatus
  }

  export type UserUpdateOneRequiredWithoutTripsDrivenNestedInput = {
    create?: XOR<UserCreateWithoutTripsDrivenInput, UserUncheckedCreateWithoutTripsDrivenInput>
    connectOrCreate?: UserCreateOrConnectWithoutTripsDrivenInput
    upsert?: UserUpsertWithoutTripsDrivenInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTripsDrivenInput, UserUpdateWithoutTripsDrivenInput>, UserUncheckedUpdateWithoutTripsDrivenInput>
  }

  export type VehicleUpdateOneRequiredWithoutTripsNestedInput = {
    create?: XOR<VehicleCreateWithoutTripsInput, VehicleUncheckedCreateWithoutTripsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutTripsInput
    upsert?: VehicleUpsertWithoutTripsInput
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutTripsInput, VehicleUpdateWithoutTripsInput>, VehicleUncheckedUpdateWithoutTripsInput>
  }

  export type WaypointUpdateManyWithoutTripNestedInput = {
    create?: XOR<WaypointCreateWithoutTripInput, WaypointUncheckedCreateWithoutTripInput> | WaypointCreateWithoutTripInput[] | WaypointUncheckedCreateWithoutTripInput[]
    connectOrCreate?: WaypointCreateOrConnectWithoutTripInput | WaypointCreateOrConnectWithoutTripInput[]
    upsert?: WaypointUpsertWithWhereUniqueWithoutTripInput | WaypointUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: WaypointCreateManyTripInputEnvelope
    set?: WaypointWhereUniqueInput | WaypointWhereUniqueInput[]
    disconnect?: WaypointWhereUniqueInput | WaypointWhereUniqueInput[]
    delete?: WaypointWhereUniqueInput | WaypointWhereUniqueInput[]
    connect?: WaypointWhereUniqueInput | WaypointWhereUniqueInput[]
    update?: WaypointUpdateWithWhereUniqueWithoutTripInput | WaypointUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: WaypointUpdateManyWithWhereWithoutTripInput | WaypointUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: WaypointScalarWhereInput | WaypointScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutTripNestedInput = {
    create?: XOR<BookingCreateWithoutTripInput, BookingUncheckedCreateWithoutTripInput> | BookingCreateWithoutTripInput[] | BookingUncheckedCreateWithoutTripInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutTripInput | BookingCreateOrConnectWithoutTripInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutTripInput | BookingUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: BookingCreateManyTripInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutTripInput | BookingUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutTripInput | BookingUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type WaypointUncheckedUpdateManyWithoutTripNestedInput = {
    create?: XOR<WaypointCreateWithoutTripInput, WaypointUncheckedCreateWithoutTripInput> | WaypointCreateWithoutTripInput[] | WaypointUncheckedCreateWithoutTripInput[]
    connectOrCreate?: WaypointCreateOrConnectWithoutTripInput | WaypointCreateOrConnectWithoutTripInput[]
    upsert?: WaypointUpsertWithWhereUniqueWithoutTripInput | WaypointUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: WaypointCreateManyTripInputEnvelope
    set?: WaypointWhereUniqueInput | WaypointWhereUniqueInput[]
    disconnect?: WaypointWhereUniqueInput | WaypointWhereUniqueInput[]
    delete?: WaypointWhereUniqueInput | WaypointWhereUniqueInput[]
    connect?: WaypointWhereUniqueInput | WaypointWhereUniqueInput[]
    update?: WaypointUpdateWithWhereUniqueWithoutTripInput | WaypointUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: WaypointUpdateManyWithWhereWithoutTripInput | WaypointUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: WaypointScalarWhereInput | WaypointScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutTripNestedInput = {
    create?: XOR<BookingCreateWithoutTripInput, BookingUncheckedCreateWithoutTripInput> | BookingCreateWithoutTripInput[] | BookingUncheckedCreateWithoutTripInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutTripInput | BookingCreateOrConnectWithoutTripInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutTripInput | BookingUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: BookingCreateManyTripInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutTripInput | BookingUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutTripInput | BookingUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type TripCreateNestedOneWithoutWaypointsInput = {
    create?: XOR<TripCreateWithoutWaypointsInput, TripUncheckedCreateWithoutWaypointsInput>
    connectOrCreate?: TripCreateOrConnectWithoutWaypointsInput
    connect?: TripWhereUniqueInput
  }

  export type TripUpdateOneRequiredWithoutWaypointsNestedInput = {
    create?: XOR<TripCreateWithoutWaypointsInput, TripUncheckedCreateWithoutWaypointsInput>
    connectOrCreate?: TripCreateOrConnectWithoutWaypointsInput
    upsert?: TripUpsertWithoutWaypointsInput
    connect?: TripWhereUniqueInput
    update?: XOR<XOR<TripUpdateToOneWithWhereWithoutWaypointsInput, TripUpdateWithoutWaypointsInput>, TripUncheckedUpdateWithoutWaypointsInput>
  }

  export type TripCreateNestedOneWithoutBookingsInput = {
    create?: XOR<TripCreateWithoutBookingsInput, TripUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: TripCreateOrConnectWithoutBookingsInput
    connect?: TripWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTripsBookedInput = {
    create?: XOR<UserCreateWithoutTripsBookedInput, UserUncheckedCreateWithoutTripsBookedInput>
    connectOrCreate?: UserCreateOrConnectWithoutTripsBookedInput
    connect?: UserWhereUniqueInput
  }

  export type EnumBookingStatusFieldUpdateOperationsInput = {
    set?: $Enums.BookingStatus
  }

  export type TripUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<TripCreateWithoutBookingsInput, TripUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: TripCreateOrConnectWithoutBookingsInput
    upsert?: TripUpsertWithoutBookingsInput
    connect?: TripWhereUniqueInput
    update?: XOR<XOR<TripUpdateToOneWithWhereWithoutBookingsInput, TripUpdateWithoutBookingsInput>, TripUncheckedUpdateWithoutBookingsInput>
  }

  export type UserUpdateOneRequiredWithoutTripsBookedNestedInput = {
    create?: XOR<UserCreateWithoutTripsBookedInput, UserUncheckedCreateWithoutTripsBookedInput>
    connectOrCreate?: UserCreateOrConnectWithoutTripsBookedInput
    upsert?: UserUpsertWithoutTripsBookedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTripsBookedInput, UserUpdateWithoutTripsBookedInput>, UserUncheckedUpdateWithoutTripsBookedInput>
  }

  export type UserCreateNestedOneWithoutRatingsGivenInput = {
    create?: XOR<UserCreateWithoutRatingsGivenInput, UserUncheckedCreateWithoutRatingsGivenInput>
    connectOrCreate?: UserCreateOrConnectWithoutRatingsGivenInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRatingsReceivedInput = {
    create?: XOR<UserCreateWithoutRatingsReceivedInput, UserUncheckedCreateWithoutRatingsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutRatingsReceivedInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRatingsGivenNestedInput = {
    create?: XOR<UserCreateWithoutRatingsGivenInput, UserUncheckedCreateWithoutRatingsGivenInput>
    connectOrCreate?: UserCreateOrConnectWithoutRatingsGivenInput
    upsert?: UserUpsertWithoutRatingsGivenInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRatingsGivenInput, UserUpdateWithoutRatingsGivenInput>, UserUncheckedUpdateWithoutRatingsGivenInput>
  }

  export type UserUpdateOneRequiredWithoutRatingsReceivedNestedInput = {
    create?: XOR<UserCreateWithoutRatingsReceivedInput, UserUncheckedCreateWithoutRatingsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutRatingsReceivedInput
    upsert?: UserUpsertWithoutRatingsReceivedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRatingsReceivedInput, UserUpdateWithoutRatingsReceivedInput>, UserUncheckedUpdateWithoutRatingsReceivedInput>
  }

  export type UserCreateNestedOneWithoutDevicesInput = {
    create?: XOR<UserCreateWithoutDevicesInput, UserUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDevicesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDevicesNestedInput = {
    create?: XOR<UserCreateWithoutDevicesInput, UserUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDevicesInput
    upsert?: UserUpsertWithoutDevicesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDevicesInput, UserUpdateWithoutDevicesInput>, UserUncheckedUpdateWithoutDevicesInput>
  }

  export type UserCreateNestedOneWithoutReportsMadeInput = {
    create?: XOR<UserCreateWithoutReportsMadeInput, UserUncheckedCreateWithoutReportsMadeInput>
    connectOrCreate?: UserCreateOrConnectWithoutReportsMadeInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReportsReceivedInput = {
    create?: XOR<UserCreateWithoutReportsReceivedInput, UserUncheckedCreateWithoutReportsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutReportsReceivedInput
    connect?: UserWhereUniqueInput
  }

  export type EnumReportStatusFieldUpdateOperationsInput = {
    set?: $Enums.ReportStatus
  }

  export type UserUpdateOneRequiredWithoutReportsMadeNestedInput = {
    create?: XOR<UserCreateWithoutReportsMadeInput, UserUncheckedCreateWithoutReportsMadeInput>
    connectOrCreate?: UserCreateOrConnectWithoutReportsMadeInput
    upsert?: UserUpsertWithoutReportsMadeInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReportsMadeInput, UserUpdateWithoutReportsMadeInput>, UserUncheckedUpdateWithoutReportsMadeInput>
  }

  export type UserUpdateOneRequiredWithoutReportsReceivedNestedInput = {
    create?: XOR<UserCreateWithoutReportsReceivedInput, UserUncheckedCreateWithoutReportsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutReportsReceivedInput
    upsert?: UserUpsertWithoutReportsReceivedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReportsReceivedInput, UserUpdateWithoutReportsReceivedInput>, UserUncheckedUpdateWithoutReportsReceivedInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumTripStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TripStatus | EnumTripStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TripStatus[] | ListEnumTripStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TripStatus[] | ListEnumTripStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTripStatusFilter<$PrismaModel> | $Enums.TripStatus
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumTripStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TripStatus | EnumTripStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TripStatus[] | ListEnumTripStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TripStatus[] | ListEnumTripStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTripStatusWithAggregatesFilter<$PrismaModel> | $Enums.TripStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTripStatusFilter<$PrismaModel>
    _max?: NestedEnumTripStatusFilter<$PrismaModel>
  }

  export type NestedEnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type NestedEnumReportStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportStatus | EnumReportStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReportStatusFilter<$PrismaModel> | $Enums.ReportStatus
  }

  export type NestedEnumReportStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportStatus | EnumReportStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReportStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReportStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReportStatusFilter<$PrismaModel>
    _max?: NestedEnumReportStatusFilter<$PrismaModel>
  }

  export type VehicleCreateWithoutOwnerInput = {
    id?: string
    model: string
    plate: string
    color?: string | null
    seats?: number
    createdAt?: Date | string
    trips?: TripCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutOwnerInput = {
    id?: string
    model: string
    plate: string
    color?: string | null
    seats?: number
    createdAt?: Date | string
    trips?: TripUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutOwnerInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutOwnerInput, VehicleUncheckedCreateWithoutOwnerInput>
  }

  export type VehicleCreateManyOwnerInputEnvelope = {
    data: VehicleCreateManyOwnerInput | VehicleCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type TripCreateWithoutDriverInput = {
    id?: string
    fromLabel: string
    toLabel: string
    fromLat: number
    fromLng: number
    toLat: number
    toLng: number
    departureTime: Date | string
    arrivalTime?: Date | string | null
    contribution?: number
    seats?: number
    isRecurring?: boolean
    status?: $Enums.TripStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicle: VehicleCreateNestedOneWithoutTripsInput
    waypoints?: WaypointCreateNestedManyWithoutTripInput
    bookings?: BookingCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutDriverInput = {
    id?: string
    vehicleId: string
    fromLabel: string
    toLabel: string
    fromLat: number
    fromLng: number
    toLat: number
    toLng: number
    departureTime: Date | string
    arrivalTime?: Date | string | null
    contribution?: number
    seats?: number
    isRecurring?: boolean
    status?: $Enums.TripStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    waypoints?: WaypointUncheckedCreateNestedManyWithoutTripInput
    bookings?: BookingUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutDriverInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutDriverInput, TripUncheckedCreateWithoutDriverInput>
  }

  export type TripCreateManyDriverInputEnvelope = {
    data: TripCreateManyDriverInput | TripCreateManyDriverInput[]
    skipDuplicates?: boolean
  }

  export type BookingCreateWithoutPassengerInput = {
    id?: string
    status?: $Enums.BookingStatus
    seats?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    trip: TripCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutPassengerInput = {
    id?: string
    tripId: string
    status?: $Enums.BookingStatus
    seats?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateOrConnectWithoutPassengerInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutPassengerInput, BookingUncheckedCreateWithoutPassengerInput>
  }

  export type BookingCreateManyPassengerInputEnvelope = {
    data: BookingCreateManyPassengerInput | BookingCreateManyPassengerInput[]
    skipDuplicates?: boolean
  }

  export type RatingCreateWithoutAuthorInput = {
    id?: string
    tripId: string
    score: number
    comment?: string | null
    createdAt?: Date | string
    target: UserCreateNestedOneWithoutRatingsReceivedInput
  }

  export type RatingUncheckedCreateWithoutAuthorInput = {
    id?: string
    tripId: string
    targetId: string
    score: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type RatingCreateOrConnectWithoutAuthorInput = {
    where: RatingWhereUniqueInput
    create: XOR<RatingCreateWithoutAuthorInput, RatingUncheckedCreateWithoutAuthorInput>
  }

  export type RatingCreateManyAuthorInputEnvelope = {
    data: RatingCreateManyAuthorInput | RatingCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type RatingCreateWithoutTargetInput = {
    id?: string
    tripId: string
    score: number
    comment?: string | null
    createdAt?: Date | string
    author: UserCreateNestedOneWithoutRatingsGivenInput
  }

  export type RatingUncheckedCreateWithoutTargetInput = {
    id?: string
    tripId: string
    authorId: string
    score: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type RatingCreateOrConnectWithoutTargetInput = {
    where: RatingWhereUniqueInput
    create: XOR<RatingCreateWithoutTargetInput, RatingUncheckedCreateWithoutTargetInput>
  }

  export type RatingCreateManyTargetInputEnvelope = {
    data: RatingCreateManyTargetInput | RatingCreateManyTargetInput[]
    skipDuplicates?: boolean
  }

  export type ReportCreateWithoutAuthorInput = {
    id?: string
    reason: string
    status?: $Enums.ReportStatus
    createdAt?: Date | string
    target: UserCreateNestedOneWithoutReportsReceivedInput
  }

  export type ReportUncheckedCreateWithoutAuthorInput = {
    id?: string
    targetId: string
    reason: string
    status?: $Enums.ReportStatus
    createdAt?: Date | string
  }

  export type ReportCreateOrConnectWithoutAuthorInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutAuthorInput, ReportUncheckedCreateWithoutAuthorInput>
  }

  export type ReportCreateManyAuthorInputEnvelope = {
    data: ReportCreateManyAuthorInput | ReportCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type ReportCreateWithoutTargetInput = {
    id?: string
    reason: string
    status?: $Enums.ReportStatus
    createdAt?: Date | string
    author: UserCreateNestedOneWithoutReportsMadeInput
  }

  export type ReportUncheckedCreateWithoutTargetInput = {
    id?: string
    authorId: string
    reason: string
    status?: $Enums.ReportStatus
    createdAt?: Date | string
  }

  export type ReportCreateOrConnectWithoutTargetInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutTargetInput, ReportUncheckedCreateWithoutTargetInput>
  }

  export type ReportCreateManyTargetInputEnvelope = {
    data: ReportCreateManyTargetInput | ReportCreateManyTargetInput[]
    skipDuplicates?: boolean
  }

  export type DeviceCreateWithoutOwnerInput = {
    id?: string
    token: string
    platform?: string | null
    createdAt?: Date | string
  }

  export type DeviceUncheckedCreateWithoutOwnerInput = {
    id?: string
    token: string
    platform?: string | null
    createdAt?: Date | string
  }

  export type DeviceCreateOrConnectWithoutOwnerInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutOwnerInput, DeviceUncheckedCreateWithoutOwnerInput>
  }

  export type DeviceCreateManyOwnerInputEnvelope = {
    data: DeviceCreateManyOwnerInput | DeviceCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type VehicleUpsertWithWhereUniqueWithoutOwnerInput = {
    where: VehicleWhereUniqueInput
    update: XOR<VehicleUpdateWithoutOwnerInput, VehicleUncheckedUpdateWithoutOwnerInput>
    create: XOR<VehicleCreateWithoutOwnerInput, VehicleUncheckedCreateWithoutOwnerInput>
  }

  export type VehicleUpdateWithWhereUniqueWithoutOwnerInput = {
    where: VehicleWhereUniqueInput
    data: XOR<VehicleUpdateWithoutOwnerInput, VehicleUncheckedUpdateWithoutOwnerInput>
  }

  export type VehicleUpdateManyWithWhereWithoutOwnerInput = {
    where: VehicleScalarWhereInput
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyWithoutOwnerInput>
  }

  export type VehicleScalarWhereInput = {
    AND?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
    OR?: VehicleScalarWhereInput[]
    NOT?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
    id?: UuidFilter<"Vehicle"> | string
    ownerId?: UuidFilter<"Vehicle"> | string
    model?: StringFilter<"Vehicle"> | string
    plate?: StringFilter<"Vehicle"> | string
    color?: StringNullableFilter<"Vehicle"> | string | null
    seats?: IntFilter<"Vehicle"> | number
    createdAt?: DateTimeFilter<"Vehicle"> | Date | string
  }

  export type TripUpsertWithWhereUniqueWithoutDriverInput = {
    where: TripWhereUniqueInput
    update: XOR<TripUpdateWithoutDriverInput, TripUncheckedUpdateWithoutDriverInput>
    create: XOR<TripCreateWithoutDriverInput, TripUncheckedCreateWithoutDriverInput>
  }

  export type TripUpdateWithWhereUniqueWithoutDriverInput = {
    where: TripWhereUniqueInput
    data: XOR<TripUpdateWithoutDriverInput, TripUncheckedUpdateWithoutDriverInput>
  }

  export type TripUpdateManyWithWhereWithoutDriverInput = {
    where: TripScalarWhereInput
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyWithoutDriverInput>
  }

  export type TripScalarWhereInput = {
    AND?: TripScalarWhereInput | TripScalarWhereInput[]
    OR?: TripScalarWhereInput[]
    NOT?: TripScalarWhereInput | TripScalarWhereInput[]
    id?: UuidFilter<"Trip"> | string
    driverId?: UuidFilter<"Trip"> | string
    vehicleId?: UuidFilter<"Trip"> | string
    fromLabel?: StringFilter<"Trip"> | string
    toLabel?: StringFilter<"Trip"> | string
    fromLat?: FloatFilter<"Trip"> | number
    fromLng?: FloatFilter<"Trip"> | number
    toLat?: FloatFilter<"Trip"> | number
    toLng?: FloatFilter<"Trip"> | number
    departureTime?: DateTimeFilter<"Trip"> | Date | string
    arrivalTime?: DateTimeNullableFilter<"Trip"> | Date | string | null
    contribution?: IntFilter<"Trip"> | number
    seats?: IntFilter<"Trip"> | number
    isRecurring?: BoolFilter<"Trip"> | boolean
    status?: EnumTripStatusFilter<"Trip"> | $Enums.TripStatus
    createdAt?: DateTimeFilter<"Trip"> | Date | string
    updatedAt?: DateTimeFilter<"Trip"> | Date | string
  }

  export type BookingUpsertWithWhereUniqueWithoutPassengerInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutPassengerInput, BookingUncheckedUpdateWithoutPassengerInput>
    create: XOR<BookingCreateWithoutPassengerInput, BookingUncheckedCreateWithoutPassengerInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutPassengerInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutPassengerInput, BookingUncheckedUpdateWithoutPassengerInput>
  }

  export type BookingUpdateManyWithWhereWithoutPassengerInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutPassengerInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id?: UuidFilter<"Booking"> | string
    tripId?: UuidFilter<"Booking"> | string
    passengerId?: UuidFilter<"Booking"> | string
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    seats?: IntFilter<"Booking"> | number
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
  }

  export type RatingUpsertWithWhereUniqueWithoutAuthorInput = {
    where: RatingWhereUniqueInput
    update: XOR<RatingUpdateWithoutAuthorInput, RatingUncheckedUpdateWithoutAuthorInput>
    create: XOR<RatingCreateWithoutAuthorInput, RatingUncheckedCreateWithoutAuthorInput>
  }

  export type RatingUpdateWithWhereUniqueWithoutAuthorInput = {
    where: RatingWhereUniqueInput
    data: XOR<RatingUpdateWithoutAuthorInput, RatingUncheckedUpdateWithoutAuthorInput>
  }

  export type RatingUpdateManyWithWhereWithoutAuthorInput = {
    where: RatingScalarWhereInput
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyWithoutAuthorInput>
  }

  export type RatingScalarWhereInput = {
    AND?: RatingScalarWhereInput | RatingScalarWhereInput[]
    OR?: RatingScalarWhereInput[]
    NOT?: RatingScalarWhereInput | RatingScalarWhereInput[]
    id?: UuidFilter<"Rating"> | string
    tripId?: UuidFilter<"Rating"> | string
    authorId?: UuidFilter<"Rating"> | string
    targetId?: UuidFilter<"Rating"> | string
    score?: IntFilter<"Rating"> | number
    comment?: StringNullableFilter<"Rating"> | string | null
    createdAt?: DateTimeFilter<"Rating"> | Date | string
  }

  export type RatingUpsertWithWhereUniqueWithoutTargetInput = {
    where: RatingWhereUniqueInput
    update: XOR<RatingUpdateWithoutTargetInput, RatingUncheckedUpdateWithoutTargetInput>
    create: XOR<RatingCreateWithoutTargetInput, RatingUncheckedCreateWithoutTargetInput>
  }

  export type RatingUpdateWithWhereUniqueWithoutTargetInput = {
    where: RatingWhereUniqueInput
    data: XOR<RatingUpdateWithoutTargetInput, RatingUncheckedUpdateWithoutTargetInput>
  }

  export type RatingUpdateManyWithWhereWithoutTargetInput = {
    where: RatingScalarWhereInput
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyWithoutTargetInput>
  }

  export type ReportUpsertWithWhereUniqueWithoutAuthorInput = {
    where: ReportWhereUniqueInput
    update: XOR<ReportUpdateWithoutAuthorInput, ReportUncheckedUpdateWithoutAuthorInput>
    create: XOR<ReportCreateWithoutAuthorInput, ReportUncheckedCreateWithoutAuthorInput>
  }

  export type ReportUpdateWithWhereUniqueWithoutAuthorInput = {
    where: ReportWhereUniqueInput
    data: XOR<ReportUpdateWithoutAuthorInput, ReportUncheckedUpdateWithoutAuthorInput>
  }

  export type ReportUpdateManyWithWhereWithoutAuthorInput = {
    where: ReportScalarWhereInput
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyWithoutAuthorInput>
  }

  export type ReportScalarWhereInput = {
    AND?: ReportScalarWhereInput | ReportScalarWhereInput[]
    OR?: ReportScalarWhereInput[]
    NOT?: ReportScalarWhereInput | ReportScalarWhereInput[]
    id?: UuidFilter<"Report"> | string
    authorId?: UuidFilter<"Report"> | string
    targetId?: UuidFilter<"Report"> | string
    reason?: StringFilter<"Report"> | string
    status?: EnumReportStatusFilter<"Report"> | $Enums.ReportStatus
    createdAt?: DateTimeFilter<"Report"> | Date | string
  }

  export type ReportUpsertWithWhereUniqueWithoutTargetInput = {
    where: ReportWhereUniqueInput
    update: XOR<ReportUpdateWithoutTargetInput, ReportUncheckedUpdateWithoutTargetInput>
    create: XOR<ReportCreateWithoutTargetInput, ReportUncheckedCreateWithoutTargetInput>
  }

  export type ReportUpdateWithWhereUniqueWithoutTargetInput = {
    where: ReportWhereUniqueInput
    data: XOR<ReportUpdateWithoutTargetInput, ReportUncheckedUpdateWithoutTargetInput>
  }

  export type ReportUpdateManyWithWhereWithoutTargetInput = {
    where: ReportScalarWhereInput
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyWithoutTargetInput>
  }

  export type DeviceUpsertWithWhereUniqueWithoutOwnerInput = {
    where: DeviceWhereUniqueInput
    update: XOR<DeviceUpdateWithoutOwnerInput, DeviceUncheckedUpdateWithoutOwnerInput>
    create: XOR<DeviceCreateWithoutOwnerInput, DeviceUncheckedCreateWithoutOwnerInput>
  }

  export type DeviceUpdateWithWhereUniqueWithoutOwnerInput = {
    where: DeviceWhereUniqueInput
    data: XOR<DeviceUpdateWithoutOwnerInput, DeviceUncheckedUpdateWithoutOwnerInput>
  }

  export type DeviceUpdateManyWithWhereWithoutOwnerInput = {
    where: DeviceScalarWhereInput
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyWithoutOwnerInput>
  }

  export type DeviceScalarWhereInput = {
    AND?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
    OR?: DeviceScalarWhereInput[]
    NOT?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
    id?: UuidFilter<"Device"> | string
    ownerId?: UuidFilter<"Device"> | string
    token?: StringFilter<"Device"> | string
    platform?: StringNullableFilter<"Device"> | string | null
    createdAt?: DateTimeFilter<"Device"> | Date | string
  }

  export type UserCreateWithoutVehiclesInput = {
    id?: string
    phone: string
    fullName?: string | null
    photoUrl?: string | null
    rating?: number
    tripsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tripsDriven?: TripCreateNestedManyWithoutDriverInput
    tripsBooked?: BookingCreateNestedManyWithoutPassengerInput
    ratingsGiven?: RatingCreateNestedManyWithoutAuthorInput
    ratingsReceived?: RatingCreateNestedManyWithoutTargetInput
    reportsMade?: ReportCreateNestedManyWithoutAuthorInput
    reportsReceived?: ReportCreateNestedManyWithoutTargetInput
    devices?: DeviceCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutVehiclesInput = {
    id?: string
    phone: string
    fullName?: string | null
    photoUrl?: string | null
    rating?: number
    tripsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tripsDriven?: TripUncheckedCreateNestedManyWithoutDriverInput
    tripsBooked?: BookingUncheckedCreateNestedManyWithoutPassengerInput
    ratingsGiven?: RatingUncheckedCreateNestedManyWithoutAuthorInput
    ratingsReceived?: RatingUncheckedCreateNestedManyWithoutTargetInput
    reportsMade?: ReportUncheckedCreateNestedManyWithoutAuthorInput
    reportsReceived?: ReportUncheckedCreateNestedManyWithoutTargetInput
    devices?: DeviceUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutVehiclesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVehiclesInput, UserUncheckedCreateWithoutVehiclesInput>
  }

  export type TripCreateWithoutVehicleInput = {
    id?: string
    fromLabel: string
    toLabel: string
    fromLat: number
    fromLng: number
    toLat: number
    toLng: number
    departureTime: Date | string
    arrivalTime?: Date | string | null
    contribution?: number
    seats?: number
    isRecurring?: boolean
    status?: $Enums.TripStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    driver: UserCreateNestedOneWithoutTripsDrivenInput
    waypoints?: WaypointCreateNestedManyWithoutTripInput
    bookings?: BookingCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutVehicleInput = {
    id?: string
    driverId: string
    fromLabel: string
    toLabel: string
    fromLat: number
    fromLng: number
    toLat: number
    toLng: number
    departureTime: Date | string
    arrivalTime?: Date | string | null
    contribution?: number
    seats?: number
    isRecurring?: boolean
    status?: $Enums.TripStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    waypoints?: WaypointUncheckedCreateNestedManyWithoutTripInput
    bookings?: BookingUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutVehicleInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutVehicleInput, TripUncheckedCreateWithoutVehicleInput>
  }

  export type TripCreateManyVehicleInputEnvelope = {
    data: TripCreateManyVehicleInput | TripCreateManyVehicleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutVehiclesInput = {
    update: XOR<UserUpdateWithoutVehiclesInput, UserUncheckedUpdateWithoutVehiclesInput>
    create: XOR<UserCreateWithoutVehiclesInput, UserUncheckedCreateWithoutVehiclesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVehiclesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVehiclesInput, UserUncheckedUpdateWithoutVehiclesInput>
  }

  export type UserUpdateWithoutVehiclesInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    tripsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tripsDriven?: TripUpdateManyWithoutDriverNestedInput
    tripsBooked?: BookingUpdateManyWithoutPassengerNestedInput
    ratingsGiven?: RatingUpdateManyWithoutAuthorNestedInput
    ratingsReceived?: RatingUpdateManyWithoutTargetNestedInput
    reportsMade?: ReportUpdateManyWithoutAuthorNestedInput
    reportsReceived?: ReportUpdateManyWithoutTargetNestedInput
    devices?: DeviceUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutVehiclesInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    tripsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tripsDriven?: TripUncheckedUpdateManyWithoutDriverNestedInput
    tripsBooked?: BookingUncheckedUpdateManyWithoutPassengerNestedInput
    ratingsGiven?: RatingUncheckedUpdateManyWithoutAuthorNestedInput
    ratingsReceived?: RatingUncheckedUpdateManyWithoutTargetNestedInput
    reportsMade?: ReportUncheckedUpdateManyWithoutAuthorNestedInput
    reportsReceived?: ReportUncheckedUpdateManyWithoutTargetNestedInput
    devices?: DeviceUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type TripUpsertWithWhereUniqueWithoutVehicleInput = {
    where: TripWhereUniqueInput
    update: XOR<TripUpdateWithoutVehicleInput, TripUncheckedUpdateWithoutVehicleInput>
    create: XOR<TripCreateWithoutVehicleInput, TripUncheckedCreateWithoutVehicleInput>
  }

  export type TripUpdateWithWhereUniqueWithoutVehicleInput = {
    where: TripWhereUniqueInput
    data: XOR<TripUpdateWithoutVehicleInput, TripUncheckedUpdateWithoutVehicleInput>
  }

  export type TripUpdateManyWithWhereWithoutVehicleInput = {
    where: TripScalarWhereInput
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyWithoutVehicleInput>
  }

  export type UserCreateWithoutTripsDrivenInput = {
    id?: string
    phone: string
    fullName?: string | null
    photoUrl?: string | null
    rating?: number
    tripsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: VehicleCreateNestedManyWithoutOwnerInput
    tripsBooked?: BookingCreateNestedManyWithoutPassengerInput
    ratingsGiven?: RatingCreateNestedManyWithoutAuthorInput
    ratingsReceived?: RatingCreateNestedManyWithoutTargetInput
    reportsMade?: ReportCreateNestedManyWithoutAuthorInput
    reportsReceived?: ReportCreateNestedManyWithoutTargetInput
    devices?: DeviceCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutTripsDrivenInput = {
    id?: string
    phone: string
    fullName?: string | null
    photoUrl?: string | null
    rating?: number
    tripsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: VehicleUncheckedCreateNestedManyWithoutOwnerInput
    tripsBooked?: BookingUncheckedCreateNestedManyWithoutPassengerInput
    ratingsGiven?: RatingUncheckedCreateNestedManyWithoutAuthorInput
    ratingsReceived?: RatingUncheckedCreateNestedManyWithoutTargetInput
    reportsMade?: ReportUncheckedCreateNestedManyWithoutAuthorInput
    reportsReceived?: ReportUncheckedCreateNestedManyWithoutTargetInput
    devices?: DeviceUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutTripsDrivenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTripsDrivenInput, UserUncheckedCreateWithoutTripsDrivenInput>
  }

  export type VehicleCreateWithoutTripsInput = {
    id?: string
    model: string
    plate: string
    color?: string | null
    seats?: number
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutVehiclesInput
  }

  export type VehicleUncheckedCreateWithoutTripsInput = {
    id?: string
    ownerId: string
    model: string
    plate: string
    color?: string | null
    seats?: number
    createdAt?: Date | string
  }

  export type VehicleCreateOrConnectWithoutTripsInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutTripsInput, VehicleUncheckedCreateWithoutTripsInput>
  }

  export type WaypointCreateWithoutTripInput = {
    id?: string
    label: string
    lat: number
    lng: number
    order: number
  }

  export type WaypointUncheckedCreateWithoutTripInput = {
    id?: string
    label: string
    lat: number
    lng: number
    order: number
  }

  export type WaypointCreateOrConnectWithoutTripInput = {
    where: WaypointWhereUniqueInput
    create: XOR<WaypointCreateWithoutTripInput, WaypointUncheckedCreateWithoutTripInput>
  }

  export type WaypointCreateManyTripInputEnvelope = {
    data: WaypointCreateManyTripInput | WaypointCreateManyTripInput[]
    skipDuplicates?: boolean
  }

  export type BookingCreateWithoutTripInput = {
    id?: string
    status?: $Enums.BookingStatus
    seats?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    passenger: UserCreateNestedOneWithoutTripsBookedInput
  }

  export type BookingUncheckedCreateWithoutTripInput = {
    id?: string
    passengerId: string
    status?: $Enums.BookingStatus
    seats?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateOrConnectWithoutTripInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutTripInput, BookingUncheckedCreateWithoutTripInput>
  }

  export type BookingCreateManyTripInputEnvelope = {
    data: BookingCreateManyTripInput | BookingCreateManyTripInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTripsDrivenInput = {
    update: XOR<UserUpdateWithoutTripsDrivenInput, UserUncheckedUpdateWithoutTripsDrivenInput>
    create: XOR<UserCreateWithoutTripsDrivenInput, UserUncheckedCreateWithoutTripsDrivenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTripsDrivenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTripsDrivenInput, UserUncheckedUpdateWithoutTripsDrivenInput>
  }

  export type UserUpdateWithoutTripsDrivenInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    tripsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehicleUpdateManyWithoutOwnerNestedInput
    tripsBooked?: BookingUpdateManyWithoutPassengerNestedInput
    ratingsGiven?: RatingUpdateManyWithoutAuthorNestedInput
    ratingsReceived?: RatingUpdateManyWithoutTargetNestedInput
    reportsMade?: ReportUpdateManyWithoutAuthorNestedInput
    reportsReceived?: ReportUpdateManyWithoutTargetNestedInput
    devices?: DeviceUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutTripsDrivenInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    tripsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehicleUncheckedUpdateManyWithoutOwnerNestedInput
    tripsBooked?: BookingUncheckedUpdateManyWithoutPassengerNestedInput
    ratingsGiven?: RatingUncheckedUpdateManyWithoutAuthorNestedInput
    ratingsReceived?: RatingUncheckedUpdateManyWithoutTargetNestedInput
    reportsMade?: ReportUncheckedUpdateManyWithoutAuthorNestedInput
    reportsReceived?: ReportUncheckedUpdateManyWithoutTargetNestedInput
    devices?: DeviceUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type VehicleUpsertWithoutTripsInput = {
    update: XOR<VehicleUpdateWithoutTripsInput, VehicleUncheckedUpdateWithoutTripsInput>
    create: XOR<VehicleCreateWithoutTripsInput, VehicleUncheckedCreateWithoutTripsInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutTripsInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutTripsInput, VehicleUncheckedUpdateWithoutTripsInput>
  }

  export type VehicleUpdateWithoutTripsInput = {
    id?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    plate?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    seats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutVehiclesNestedInput
  }

  export type VehicleUncheckedUpdateWithoutTripsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    plate?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    seats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaypointUpsertWithWhereUniqueWithoutTripInput = {
    where: WaypointWhereUniqueInput
    update: XOR<WaypointUpdateWithoutTripInput, WaypointUncheckedUpdateWithoutTripInput>
    create: XOR<WaypointCreateWithoutTripInput, WaypointUncheckedCreateWithoutTripInput>
  }

  export type WaypointUpdateWithWhereUniqueWithoutTripInput = {
    where: WaypointWhereUniqueInput
    data: XOR<WaypointUpdateWithoutTripInput, WaypointUncheckedUpdateWithoutTripInput>
  }

  export type WaypointUpdateManyWithWhereWithoutTripInput = {
    where: WaypointScalarWhereInput
    data: XOR<WaypointUpdateManyMutationInput, WaypointUncheckedUpdateManyWithoutTripInput>
  }

  export type WaypointScalarWhereInput = {
    AND?: WaypointScalarWhereInput | WaypointScalarWhereInput[]
    OR?: WaypointScalarWhereInput[]
    NOT?: WaypointScalarWhereInput | WaypointScalarWhereInput[]
    id?: UuidFilter<"Waypoint"> | string
    tripId?: UuidFilter<"Waypoint"> | string
    label?: StringFilter<"Waypoint"> | string
    lat?: FloatFilter<"Waypoint"> | number
    lng?: FloatFilter<"Waypoint"> | number
    order?: IntFilter<"Waypoint"> | number
  }

  export type BookingUpsertWithWhereUniqueWithoutTripInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutTripInput, BookingUncheckedUpdateWithoutTripInput>
    create: XOR<BookingCreateWithoutTripInput, BookingUncheckedCreateWithoutTripInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutTripInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutTripInput, BookingUncheckedUpdateWithoutTripInput>
  }

  export type BookingUpdateManyWithWhereWithoutTripInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutTripInput>
  }

  export type TripCreateWithoutWaypointsInput = {
    id?: string
    fromLabel: string
    toLabel: string
    fromLat: number
    fromLng: number
    toLat: number
    toLng: number
    departureTime: Date | string
    arrivalTime?: Date | string | null
    contribution?: number
    seats?: number
    isRecurring?: boolean
    status?: $Enums.TripStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    driver: UserCreateNestedOneWithoutTripsDrivenInput
    vehicle: VehicleCreateNestedOneWithoutTripsInput
    bookings?: BookingCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutWaypointsInput = {
    id?: string
    driverId: string
    vehicleId: string
    fromLabel: string
    toLabel: string
    fromLat: number
    fromLng: number
    toLat: number
    toLng: number
    departureTime: Date | string
    arrivalTime?: Date | string | null
    contribution?: number
    seats?: number
    isRecurring?: boolean
    status?: $Enums.TripStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutWaypointsInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutWaypointsInput, TripUncheckedCreateWithoutWaypointsInput>
  }

  export type TripUpsertWithoutWaypointsInput = {
    update: XOR<TripUpdateWithoutWaypointsInput, TripUncheckedUpdateWithoutWaypointsInput>
    create: XOR<TripCreateWithoutWaypointsInput, TripUncheckedCreateWithoutWaypointsInput>
    where?: TripWhereInput
  }

  export type TripUpdateToOneWithWhereWithoutWaypointsInput = {
    where?: TripWhereInput
    data: XOR<TripUpdateWithoutWaypointsInput, TripUncheckedUpdateWithoutWaypointsInput>
  }

  export type TripUpdateWithoutWaypointsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromLabel?: StringFieldUpdateOperationsInput | string
    toLabel?: StringFieldUpdateOperationsInput | string
    fromLat?: FloatFieldUpdateOperationsInput | number
    fromLng?: FloatFieldUpdateOperationsInput | number
    toLat?: FloatFieldUpdateOperationsInput | number
    toLng?: FloatFieldUpdateOperationsInput | number
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contribution?: IntFieldUpdateOperationsInput | number
    seats?: IntFieldUpdateOperationsInput | number
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driver?: UserUpdateOneRequiredWithoutTripsDrivenNestedInput
    vehicle?: VehicleUpdateOneRequiredWithoutTripsNestedInput
    bookings?: BookingUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutWaypointsInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    fromLabel?: StringFieldUpdateOperationsInput | string
    toLabel?: StringFieldUpdateOperationsInput | string
    fromLat?: FloatFieldUpdateOperationsInput | number
    fromLng?: FloatFieldUpdateOperationsInput | number
    toLat?: FloatFieldUpdateOperationsInput | number
    toLng?: FloatFieldUpdateOperationsInput | number
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contribution?: IntFieldUpdateOperationsInput | number
    seats?: IntFieldUpdateOperationsInput | number
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutTripNestedInput
  }

  export type TripCreateWithoutBookingsInput = {
    id?: string
    fromLabel: string
    toLabel: string
    fromLat: number
    fromLng: number
    toLat: number
    toLng: number
    departureTime: Date | string
    arrivalTime?: Date | string | null
    contribution?: number
    seats?: number
    isRecurring?: boolean
    status?: $Enums.TripStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    driver: UserCreateNestedOneWithoutTripsDrivenInput
    vehicle: VehicleCreateNestedOneWithoutTripsInput
    waypoints?: WaypointCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutBookingsInput = {
    id?: string
    driverId: string
    vehicleId: string
    fromLabel: string
    toLabel: string
    fromLat: number
    fromLng: number
    toLat: number
    toLng: number
    departureTime: Date | string
    arrivalTime?: Date | string | null
    contribution?: number
    seats?: number
    isRecurring?: boolean
    status?: $Enums.TripStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    waypoints?: WaypointUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutBookingsInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutBookingsInput, TripUncheckedCreateWithoutBookingsInput>
  }

  export type UserCreateWithoutTripsBookedInput = {
    id?: string
    phone: string
    fullName?: string | null
    photoUrl?: string | null
    rating?: number
    tripsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: VehicleCreateNestedManyWithoutOwnerInput
    tripsDriven?: TripCreateNestedManyWithoutDriverInput
    ratingsGiven?: RatingCreateNestedManyWithoutAuthorInput
    ratingsReceived?: RatingCreateNestedManyWithoutTargetInput
    reportsMade?: ReportCreateNestedManyWithoutAuthorInput
    reportsReceived?: ReportCreateNestedManyWithoutTargetInput
    devices?: DeviceCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutTripsBookedInput = {
    id?: string
    phone: string
    fullName?: string | null
    photoUrl?: string | null
    rating?: number
    tripsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: VehicleUncheckedCreateNestedManyWithoutOwnerInput
    tripsDriven?: TripUncheckedCreateNestedManyWithoutDriverInput
    ratingsGiven?: RatingUncheckedCreateNestedManyWithoutAuthorInput
    ratingsReceived?: RatingUncheckedCreateNestedManyWithoutTargetInput
    reportsMade?: ReportUncheckedCreateNestedManyWithoutAuthorInput
    reportsReceived?: ReportUncheckedCreateNestedManyWithoutTargetInput
    devices?: DeviceUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutTripsBookedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTripsBookedInput, UserUncheckedCreateWithoutTripsBookedInput>
  }

  export type TripUpsertWithoutBookingsInput = {
    update: XOR<TripUpdateWithoutBookingsInput, TripUncheckedUpdateWithoutBookingsInput>
    create: XOR<TripCreateWithoutBookingsInput, TripUncheckedCreateWithoutBookingsInput>
    where?: TripWhereInput
  }

  export type TripUpdateToOneWithWhereWithoutBookingsInput = {
    where?: TripWhereInput
    data: XOR<TripUpdateWithoutBookingsInput, TripUncheckedUpdateWithoutBookingsInput>
  }

  export type TripUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromLabel?: StringFieldUpdateOperationsInput | string
    toLabel?: StringFieldUpdateOperationsInput | string
    fromLat?: FloatFieldUpdateOperationsInput | number
    fromLng?: FloatFieldUpdateOperationsInput | number
    toLat?: FloatFieldUpdateOperationsInput | number
    toLng?: FloatFieldUpdateOperationsInput | number
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contribution?: IntFieldUpdateOperationsInput | number
    seats?: IntFieldUpdateOperationsInput | number
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driver?: UserUpdateOneRequiredWithoutTripsDrivenNestedInput
    vehicle?: VehicleUpdateOneRequiredWithoutTripsNestedInput
    waypoints?: WaypointUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    fromLabel?: StringFieldUpdateOperationsInput | string
    toLabel?: StringFieldUpdateOperationsInput | string
    fromLat?: FloatFieldUpdateOperationsInput | number
    fromLng?: FloatFieldUpdateOperationsInput | number
    toLat?: FloatFieldUpdateOperationsInput | number
    toLng?: FloatFieldUpdateOperationsInput | number
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contribution?: IntFieldUpdateOperationsInput | number
    seats?: IntFieldUpdateOperationsInput | number
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    waypoints?: WaypointUncheckedUpdateManyWithoutTripNestedInput
  }

  export type UserUpsertWithoutTripsBookedInput = {
    update: XOR<UserUpdateWithoutTripsBookedInput, UserUncheckedUpdateWithoutTripsBookedInput>
    create: XOR<UserCreateWithoutTripsBookedInput, UserUncheckedCreateWithoutTripsBookedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTripsBookedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTripsBookedInput, UserUncheckedUpdateWithoutTripsBookedInput>
  }

  export type UserUpdateWithoutTripsBookedInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    tripsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehicleUpdateManyWithoutOwnerNestedInput
    tripsDriven?: TripUpdateManyWithoutDriverNestedInput
    ratingsGiven?: RatingUpdateManyWithoutAuthorNestedInput
    ratingsReceived?: RatingUpdateManyWithoutTargetNestedInput
    reportsMade?: ReportUpdateManyWithoutAuthorNestedInput
    reportsReceived?: ReportUpdateManyWithoutTargetNestedInput
    devices?: DeviceUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutTripsBookedInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    tripsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehicleUncheckedUpdateManyWithoutOwnerNestedInput
    tripsDriven?: TripUncheckedUpdateManyWithoutDriverNestedInput
    ratingsGiven?: RatingUncheckedUpdateManyWithoutAuthorNestedInput
    ratingsReceived?: RatingUncheckedUpdateManyWithoutTargetNestedInput
    reportsMade?: ReportUncheckedUpdateManyWithoutAuthorNestedInput
    reportsReceived?: ReportUncheckedUpdateManyWithoutTargetNestedInput
    devices?: DeviceUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserCreateWithoutRatingsGivenInput = {
    id?: string
    phone: string
    fullName?: string | null
    photoUrl?: string | null
    rating?: number
    tripsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: VehicleCreateNestedManyWithoutOwnerInput
    tripsDriven?: TripCreateNestedManyWithoutDriverInput
    tripsBooked?: BookingCreateNestedManyWithoutPassengerInput
    ratingsReceived?: RatingCreateNestedManyWithoutTargetInput
    reportsMade?: ReportCreateNestedManyWithoutAuthorInput
    reportsReceived?: ReportCreateNestedManyWithoutTargetInput
    devices?: DeviceCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutRatingsGivenInput = {
    id?: string
    phone: string
    fullName?: string | null
    photoUrl?: string | null
    rating?: number
    tripsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: VehicleUncheckedCreateNestedManyWithoutOwnerInput
    tripsDriven?: TripUncheckedCreateNestedManyWithoutDriverInput
    tripsBooked?: BookingUncheckedCreateNestedManyWithoutPassengerInput
    ratingsReceived?: RatingUncheckedCreateNestedManyWithoutTargetInput
    reportsMade?: ReportUncheckedCreateNestedManyWithoutAuthorInput
    reportsReceived?: ReportUncheckedCreateNestedManyWithoutTargetInput
    devices?: DeviceUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutRatingsGivenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRatingsGivenInput, UserUncheckedCreateWithoutRatingsGivenInput>
  }

  export type UserCreateWithoutRatingsReceivedInput = {
    id?: string
    phone: string
    fullName?: string | null
    photoUrl?: string | null
    rating?: number
    tripsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: VehicleCreateNestedManyWithoutOwnerInput
    tripsDriven?: TripCreateNestedManyWithoutDriverInput
    tripsBooked?: BookingCreateNestedManyWithoutPassengerInput
    ratingsGiven?: RatingCreateNestedManyWithoutAuthorInput
    reportsMade?: ReportCreateNestedManyWithoutAuthorInput
    reportsReceived?: ReportCreateNestedManyWithoutTargetInput
    devices?: DeviceCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutRatingsReceivedInput = {
    id?: string
    phone: string
    fullName?: string | null
    photoUrl?: string | null
    rating?: number
    tripsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: VehicleUncheckedCreateNestedManyWithoutOwnerInput
    tripsDriven?: TripUncheckedCreateNestedManyWithoutDriverInput
    tripsBooked?: BookingUncheckedCreateNestedManyWithoutPassengerInput
    ratingsGiven?: RatingUncheckedCreateNestedManyWithoutAuthorInput
    reportsMade?: ReportUncheckedCreateNestedManyWithoutAuthorInput
    reportsReceived?: ReportUncheckedCreateNestedManyWithoutTargetInput
    devices?: DeviceUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutRatingsReceivedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRatingsReceivedInput, UserUncheckedCreateWithoutRatingsReceivedInput>
  }

  export type UserUpsertWithoutRatingsGivenInput = {
    update: XOR<UserUpdateWithoutRatingsGivenInput, UserUncheckedUpdateWithoutRatingsGivenInput>
    create: XOR<UserCreateWithoutRatingsGivenInput, UserUncheckedCreateWithoutRatingsGivenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRatingsGivenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRatingsGivenInput, UserUncheckedUpdateWithoutRatingsGivenInput>
  }

  export type UserUpdateWithoutRatingsGivenInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    tripsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehicleUpdateManyWithoutOwnerNestedInput
    tripsDriven?: TripUpdateManyWithoutDriverNestedInput
    tripsBooked?: BookingUpdateManyWithoutPassengerNestedInput
    ratingsReceived?: RatingUpdateManyWithoutTargetNestedInput
    reportsMade?: ReportUpdateManyWithoutAuthorNestedInput
    reportsReceived?: ReportUpdateManyWithoutTargetNestedInput
    devices?: DeviceUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutRatingsGivenInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    tripsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehicleUncheckedUpdateManyWithoutOwnerNestedInput
    tripsDriven?: TripUncheckedUpdateManyWithoutDriverNestedInput
    tripsBooked?: BookingUncheckedUpdateManyWithoutPassengerNestedInput
    ratingsReceived?: RatingUncheckedUpdateManyWithoutTargetNestedInput
    reportsMade?: ReportUncheckedUpdateManyWithoutAuthorNestedInput
    reportsReceived?: ReportUncheckedUpdateManyWithoutTargetNestedInput
    devices?: DeviceUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserUpsertWithoutRatingsReceivedInput = {
    update: XOR<UserUpdateWithoutRatingsReceivedInput, UserUncheckedUpdateWithoutRatingsReceivedInput>
    create: XOR<UserCreateWithoutRatingsReceivedInput, UserUncheckedCreateWithoutRatingsReceivedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRatingsReceivedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRatingsReceivedInput, UserUncheckedUpdateWithoutRatingsReceivedInput>
  }

  export type UserUpdateWithoutRatingsReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    tripsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehicleUpdateManyWithoutOwnerNestedInput
    tripsDriven?: TripUpdateManyWithoutDriverNestedInput
    tripsBooked?: BookingUpdateManyWithoutPassengerNestedInput
    ratingsGiven?: RatingUpdateManyWithoutAuthorNestedInput
    reportsMade?: ReportUpdateManyWithoutAuthorNestedInput
    reportsReceived?: ReportUpdateManyWithoutTargetNestedInput
    devices?: DeviceUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutRatingsReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    tripsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehicleUncheckedUpdateManyWithoutOwnerNestedInput
    tripsDriven?: TripUncheckedUpdateManyWithoutDriverNestedInput
    tripsBooked?: BookingUncheckedUpdateManyWithoutPassengerNestedInput
    ratingsGiven?: RatingUncheckedUpdateManyWithoutAuthorNestedInput
    reportsMade?: ReportUncheckedUpdateManyWithoutAuthorNestedInput
    reportsReceived?: ReportUncheckedUpdateManyWithoutTargetNestedInput
    devices?: DeviceUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserCreateWithoutDevicesInput = {
    id?: string
    phone: string
    fullName?: string | null
    photoUrl?: string | null
    rating?: number
    tripsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: VehicleCreateNestedManyWithoutOwnerInput
    tripsDriven?: TripCreateNestedManyWithoutDriverInput
    tripsBooked?: BookingCreateNestedManyWithoutPassengerInput
    ratingsGiven?: RatingCreateNestedManyWithoutAuthorInput
    ratingsReceived?: RatingCreateNestedManyWithoutTargetInput
    reportsMade?: ReportCreateNestedManyWithoutAuthorInput
    reportsReceived?: ReportCreateNestedManyWithoutTargetInput
  }

  export type UserUncheckedCreateWithoutDevicesInput = {
    id?: string
    phone: string
    fullName?: string | null
    photoUrl?: string | null
    rating?: number
    tripsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: VehicleUncheckedCreateNestedManyWithoutOwnerInput
    tripsDriven?: TripUncheckedCreateNestedManyWithoutDriverInput
    tripsBooked?: BookingUncheckedCreateNestedManyWithoutPassengerInput
    ratingsGiven?: RatingUncheckedCreateNestedManyWithoutAuthorInput
    ratingsReceived?: RatingUncheckedCreateNestedManyWithoutTargetInput
    reportsMade?: ReportUncheckedCreateNestedManyWithoutAuthorInput
    reportsReceived?: ReportUncheckedCreateNestedManyWithoutTargetInput
  }

  export type UserCreateOrConnectWithoutDevicesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDevicesInput, UserUncheckedCreateWithoutDevicesInput>
  }

  export type UserUpsertWithoutDevicesInput = {
    update: XOR<UserUpdateWithoutDevicesInput, UserUncheckedUpdateWithoutDevicesInput>
    create: XOR<UserCreateWithoutDevicesInput, UserUncheckedCreateWithoutDevicesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDevicesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDevicesInput, UserUncheckedUpdateWithoutDevicesInput>
  }

  export type UserUpdateWithoutDevicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    tripsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehicleUpdateManyWithoutOwnerNestedInput
    tripsDriven?: TripUpdateManyWithoutDriverNestedInput
    tripsBooked?: BookingUpdateManyWithoutPassengerNestedInput
    ratingsGiven?: RatingUpdateManyWithoutAuthorNestedInput
    ratingsReceived?: RatingUpdateManyWithoutTargetNestedInput
    reportsMade?: ReportUpdateManyWithoutAuthorNestedInput
    reportsReceived?: ReportUpdateManyWithoutTargetNestedInput
  }

  export type UserUncheckedUpdateWithoutDevicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    tripsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehicleUncheckedUpdateManyWithoutOwnerNestedInput
    tripsDriven?: TripUncheckedUpdateManyWithoutDriverNestedInput
    tripsBooked?: BookingUncheckedUpdateManyWithoutPassengerNestedInput
    ratingsGiven?: RatingUncheckedUpdateManyWithoutAuthorNestedInput
    ratingsReceived?: RatingUncheckedUpdateManyWithoutTargetNestedInput
    reportsMade?: ReportUncheckedUpdateManyWithoutAuthorNestedInput
    reportsReceived?: ReportUncheckedUpdateManyWithoutTargetNestedInput
  }

  export type UserCreateWithoutReportsMadeInput = {
    id?: string
    phone: string
    fullName?: string | null
    photoUrl?: string | null
    rating?: number
    tripsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: VehicleCreateNestedManyWithoutOwnerInput
    tripsDriven?: TripCreateNestedManyWithoutDriverInput
    tripsBooked?: BookingCreateNestedManyWithoutPassengerInput
    ratingsGiven?: RatingCreateNestedManyWithoutAuthorInput
    ratingsReceived?: RatingCreateNestedManyWithoutTargetInput
    reportsReceived?: ReportCreateNestedManyWithoutTargetInput
    devices?: DeviceCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutReportsMadeInput = {
    id?: string
    phone: string
    fullName?: string | null
    photoUrl?: string | null
    rating?: number
    tripsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: VehicleUncheckedCreateNestedManyWithoutOwnerInput
    tripsDriven?: TripUncheckedCreateNestedManyWithoutDriverInput
    tripsBooked?: BookingUncheckedCreateNestedManyWithoutPassengerInput
    ratingsGiven?: RatingUncheckedCreateNestedManyWithoutAuthorInput
    ratingsReceived?: RatingUncheckedCreateNestedManyWithoutTargetInput
    reportsReceived?: ReportUncheckedCreateNestedManyWithoutTargetInput
    devices?: DeviceUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutReportsMadeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReportsMadeInput, UserUncheckedCreateWithoutReportsMadeInput>
  }

  export type UserCreateWithoutReportsReceivedInput = {
    id?: string
    phone: string
    fullName?: string | null
    photoUrl?: string | null
    rating?: number
    tripsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: VehicleCreateNestedManyWithoutOwnerInput
    tripsDriven?: TripCreateNestedManyWithoutDriverInput
    tripsBooked?: BookingCreateNestedManyWithoutPassengerInput
    ratingsGiven?: RatingCreateNestedManyWithoutAuthorInput
    ratingsReceived?: RatingCreateNestedManyWithoutTargetInput
    reportsMade?: ReportCreateNestedManyWithoutAuthorInput
    devices?: DeviceCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutReportsReceivedInput = {
    id?: string
    phone: string
    fullName?: string | null
    photoUrl?: string | null
    rating?: number
    tripsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: VehicleUncheckedCreateNestedManyWithoutOwnerInput
    tripsDriven?: TripUncheckedCreateNestedManyWithoutDriverInput
    tripsBooked?: BookingUncheckedCreateNestedManyWithoutPassengerInput
    ratingsGiven?: RatingUncheckedCreateNestedManyWithoutAuthorInput
    ratingsReceived?: RatingUncheckedCreateNestedManyWithoutTargetInput
    reportsMade?: ReportUncheckedCreateNestedManyWithoutAuthorInput
    devices?: DeviceUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutReportsReceivedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReportsReceivedInput, UserUncheckedCreateWithoutReportsReceivedInput>
  }

  export type UserUpsertWithoutReportsMadeInput = {
    update: XOR<UserUpdateWithoutReportsMadeInput, UserUncheckedUpdateWithoutReportsMadeInput>
    create: XOR<UserCreateWithoutReportsMadeInput, UserUncheckedCreateWithoutReportsMadeInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReportsMadeInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReportsMadeInput, UserUncheckedUpdateWithoutReportsMadeInput>
  }

  export type UserUpdateWithoutReportsMadeInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    tripsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehicleUpdateManyWithoutOwnerNestedInput
    tripsDriven?: TripUpdateManyWithoutDriverNestedInput
    tripsBooked?: BookingUpdateManyWithoutPassengerNestedInput
    ratingsGiven?: RatingUpdateManyWithoutAuthorNestedInput
    ratingsReceived?: RatingUpdateManyWithoutTargetNestedInput
    reportsReceived?: ReportUpdateManyWithoutTargetNestedInput
    devices?: DeviceUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutReportsMadeInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    tripsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehicleUncheckedUpdateManyWithoutOwnerNestedInput
    tripsDriven?: TripUncheckedUpdateManyWithoutDriverNestedInput
    tripsBooked?: BookingUncheckedUpdateManyWithoutPassengerNestedInput
    ratingsGiven?: RatingUncheckedUpdateManyWithoutAuthorNestedInput
    ratingsReceived?: RatingUncheckedUpdateManyWithoutTargetNestedInput
    reportsReceived?: ReportUncheckedUpdateManyWithoutTargetNestedInput
    devices?: DeviceUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserUpsertWithoutReportsReceivedInput = {
    update: XOR<UserUpdateWithoutReportsReceivedInput, UserUncheckedUpdateWithoutReportsReceivedInput>
    create: XOR<UserCreateWithoutReportsReceivedInput, UserUncheckedCreateWithoutReportsReceivedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReportsReceivedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReportsReceivedInput, UserUncheckedUpdateWithoutReportsReceivedInput>
  }

  export type UserUpdateWithoutReportsReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    tripsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehicleUpdateManyWithoutOwnerNestedInput
    tripsDriven?: TripUpdateManyWithoutDriverNestedInput
    tripsBooked?: BookingUpdateManyWithoutPassengerNestedInput
    ratingsGiven?: RatingUpdateManyWithoutAuthorNestedInput
    ratingsReceived?: RatingUpdateManyWithoutTargetNestedInput
    reportsMade?: ReportUpdateManyWithoutAuthorNestedInput
    devices?: DeviceUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutReportsReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    tripsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehicleUncheckedUpdateManyWithoutOwnerNestedInput
    tripsDriven?: TripUncheckedUpdateManyWithoutDriverNestedInput
    tripsBooked?: BookingUncheckedUpdateManyWithoutPassengerNestedInput
    ratingsGiven?: RatingUncheckedUpdateManyWithoutAuthorNestedInput
    ratingsReceived?: RatingUncheckedUpdateManyWithoutTargetNestedInput
    reportsMade?: ReportUncheckedUpdateManyWithoutAuthorNestedInput
    devices?: DeviceUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type VehicleCreateManyOwnerInput = {
    id?: string
    model: string
    plate: string
    color?: string | null
    seats?: number
    createdAt?: Date | string
  }

  export type TripCreateManyDriverInput = {
    id?: string
    vehicleId: string
    fromLabel: string
    toLabel: string
    fromLat: number
    fromLng: number
    toLat: number
    toLng: number
    departureTime: Date | string
    arrivalTime?: Date | string | null
    contribution?: number
    seats?: number
    isRecurring?: boolean
    status?: $Enums.TripStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateManyPassengerInput = {
    id?: string
    tripId: string
    status?: $Enums.BookingStatus
    seats?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RatingCreateManyAuthorInput = {
    id?: string
    tripId: string
    targetId: string
    score: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type RatingCreateManyTargetInput = {
    id?: string
    tripId: string
    authorId: string
    score: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReportCreateManyAuthorInput = {
    id?: string
    targetId: string
    reason: string
    status?: $Enums.ReportStatus
    createdAt?: Date | string
  }

  export type ReportCreateManyTargetInput = {
    id?: string
    authorId: string
    reason: string
    status?: $Enums.ReportStatus
    createdAt?: Date | string
  }

  export type DeviceCreateManyOwnerInput = {
    id?: string
    token: string
    platform?: string | null
    createdAt?: Date | string
  }

  export type VehicleUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    plate?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    seats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: TripUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    plate?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    seats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: TripUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    plate?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    seats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripUpdateWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromLabel?: StringFieldUpdateOperationsInput | string
    toLabel?: StringFieldUpdateOperationsInput | string
    fromLat?: FloatFieldUpdateOperationsInput | number
    fromLng?: FloatFieldUpdateOperationsInput | number
    toLat?: FloatFieldUpdateOperationsInput | number
    toLng?: FloatFieldUpdateOperationsInput | number
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contribution?: IntFieldUpdateOperationsInput | number
    seats?: IntFieldUpdateOperationsInput | number
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneRequiredWithoutTripsNestedInput
    waypoints?: WaypointUpdateManyWithoutTripNestedInput
    bookings?: BookingUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    fromLabel?: StringFieldUpdateOperationsInput | string
    toLabel?: StringFieldUpdateOperationsInput | string
    fromLat?: FloatFieldUpdateOperationsInput | number
    fromLng?: FloatFieldUpdateOperationsInput | number
    toLat?: FloatFieldUpdateOperationsInput | number
    toLng?: FloatFieldUpdateOperationsInput | number
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contribution?: IntFieldUpdateOperationsInput | number
    seats?: IntFieldUpdateOperationsInput | number
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    waypoints?: WaypointUncheckedUpdateManyWithoutTripNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateManyWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    fromLabel?: StringFieldUpdateOperationsInput | string
    toLabel?: StringFieldUpdateOperationsInput | string
    fromLat?: FloatFieldUpdateOperationsInput | number
    fromLng?: FloatFieldUpdateOperationsInput | number
    toLat?: FloatFieldUpdateOperationsInput | number
    toLng?: FloatFieldUpdateOperationsInput | number
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contribution?: IntFieldUpdateOperationsInput | number
    seats?: IntFieldUpdateOperationsInput | number
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUpdateWithoutPassengerInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    seats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trip?: TripUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutPassengerInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    seats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyWithoutPassengerInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    seats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    target?: UserUpdateOneRequiredWithoutRatingsReceivedNestedInput
  }

  export type RatingUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingUpdateWithoutTargetInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutRatingsGivenNestedInput
  }

  export type RatingUncheckedUpdateWithoutTargetInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingUncheckedUpdateManyWithoutTargetInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    target?: UserUpdateOneRequiredWithoutReportsReceivedNestedInput
  }

  export type ReportUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUpdateWithoutTargetInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutReportsMadeNestedInput
  }

  export type ReportUncheckedUpdateWithoutTargetInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateManyWithoutTargetInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripCreateManyVehicleInput = {
    id?: string
    driverId: string
    fromLabel: string
    toLabel: string
    fromLat: number
    fromLng: number
    toLat: number
    toLng: number
    departureTime: Date | string
    arrivalTime?: Date | string | null
    contribution?: number
    seats?: number
    isRecurring?: boolean
    status?: $Enums.TripStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromLabel?: StringFieldUpdateOperationsInput | string
    toLabel?: StringFieldUpdateOperationsInput | string
    fromLat?: FloatFieldUpdateOperationsInput | number
    fromLng?: FloatFieldUpdateOperationsInput | number
    toLat?: FloatFieldUpdateOperationsInput | number
    toLng?: FloatFieldUpdateOperationsInput | number
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contribution?: IntFieldUpdateOperationsInput | number
    seats?: IntFieldUpdateOperationsInput | number
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driver?: UserUpdateOneRequiredWithoutTripsDrivenNestedInput
    waypoints?: WaypointUpdateManyWithoutTripNestedInput
    bookings?: BookingUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    fromLabel?: StringFieldUpdateOperationsInput | string
    toLabel?: StringFieldUpdateOperationsInput | string
    fromLat?: FloatFieldUpdateOperationsInput | number
    fromLng?: FloatFieldUpdateOperationsInput | number
    toLat?: FloatFieldUpdateOperationsInput | number
    toLng?: FloatFieldUpdateOperationsInput | number
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contribution?: IntFieldUpdateOperationsInput | number
    seats?: IntFieldUpdateOperationsInput | number
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    waypoints?: WaypointUncheckedUpdateManyWithoutTripNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateManyWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    fromLabel?: StringFieldUpdateOperationsInput | string
    toLabel?: StringFieldUpdateOperationsInput | string
    fromLat?: FloatFieldUpdateOperationsInput | number
    fromLng?: FloatFieldUpdateOperationsInput | number
    toLat?: FloatFieldUpdateOperationsInput | number
    toLng?: FloatFieldUpdateOperationsInput | number
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contribution?: IntFieldUpdateOperationsInput | number
    seats?: IntFieldUpdateOperationsInput | number
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaypointCreateManyTripInput = {
    id?: string
    label: string
    lat: number
    lng: number
    order: number
  }

  export type BookingCreateManyTripInput = {
    id?: string
    passengerId: string
    status?: $Enums.BookingStatus
    seats?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WaypointUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
  }

  export type WaypointUncheckedUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
  }

  export type WaypointUncheckedUpdateManyWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
  }

  export type BookingUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    seats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passenger?: UserUpdateOneRequiredWithoutTripsBookedNestedInput
  }

  export type BookingUncheckedUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    passengerId?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    seats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    passengerId?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    seats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}