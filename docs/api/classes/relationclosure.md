[@jlguenego/set](../README.md) / [Exports](../modules.md) / RelationClosure

# Class: RelationClosure

## Table of contents

### Constructors

- [constructor](relationclosure.md#constructor)

### Methods

- [buildRNext](relationclosure.md#buildrnext)
- [buildRPlus](relationclosure.md#buildrplus)
- [buildRStar](relationclosure.md#buildrstar)

## Constructors

### constructor

\+ **new RelationClosure**(): [*RelationClosure*](relationclosure.md)

**Returns:** [*RelationClosure*](relationclosure.md)

## Methods

### buildRNext

▸ `Static`**buildRNext**<T\>(`domain`: *Set*<T\>, `relation`: [*RelationOn*](relationon.md)<T\>, `r`: [*RelationOn*](relationon.md)<T\>): [*RelationOn*](relationon.md)<T\>

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`domain` | *Set*<T\> |
`relation` | [*RelationOn*](relationon.md)<T\> |
`r` | [*RelationOn*](relationon.md)<T\> |

**Returns:** [*RelationOn*](relationon.md)<T\>

Defined in: [relations/RelationClosure.ts:5](https://github.com/jlguenego/set/blob/ecaa784/src/relations/RelationClosure.ts#L5)

___

### buildRPlus

▸ `Static`**buildRPlus**<T\>(`domain`: *Set*<T\>, `relation`: [*RelationOn*](relationon.md)<T\>): [*RelationOn*](relationon.md)<T\>

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`domain` | *Set*<T\> |
`relation` | [*RelationOn*](relationon.md)<T\> |

**Returns:** [*RelationOn*](relationon.md)<T\>

Defined in: [relations/RelationClosure.ts:20](https://github.com/jlguenego/set/blob/ecaa784/src/relations/RelationClosure.ts#L20)

___

### buildRStar

▸ `Static`**buildRStar**<T\>(`domain`: *Set*<T\>, `relation`: [*RelationOn*](relationon.md)<T\>): [*RelationOn*](relationon.md)<T\>

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`domain` | *Set*<T\> |
`relation` | [*RelationOn*](relationon.md)<T\> |

**Returns:** [*RelationOn*](relationon.md)<T\>

Defined in: [relations/RelationClosure.ts:34](https://github.com/jlguenego/set/blob/ecaa784/src/relations/RelationClosure.ts#L34)
