[@jlguenego/set](README.md) / Exports

# @jlguenego/set

## Table of contents

### Classes

- [EquivalenceRelation](classes/equivalencerelation.md)
- [Mapping](classes/mapping.md)
- [OrderedPair](classes/orderedpair.md)
- [Relation](classes/relation.md)
- [RelationClosure](classes/relationclosure.md)
- [RelationOn](classes/relationon.md)
- [Sets](classes/sets.md)

### Type aliases

- [RelationSpec](modules.md#relationspec)

### Functions

- [getDistinctCouples](modules.md#getdistinctcouples)

## Type aliases

### RelationSpec

Ƭ **RelationSpec**<T, U\>: (`t`: T, `u`: U) => *boolean*

#### Type parameters:

Name |
:------ |
`T` |
`U` |

#### Type declaration:

▸ (`t`: T, `u`: U): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`t` | T |
`u` | U |

**Returns:** *boolean*

Defined in: [relations/Relation.ts:3](https://github.com/jlguenego/set/blob/ecaa784/src/relations/Relation.ts#L3)

## Functions

### getDistinctCouples

▸ `Const`**getDistinctCouples**<T\>(...`array`: T[]): *Set*<[*OrderedPair*](classes/orderedpair.md)<T, T\>\>

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`...array` | T[] |

**Returns:** *Set*<[*OrderedPair*](classes/orderedpair.md)<T, T\>\>

Defined in: [couples.ts:3](https://github.com/jlguenego/set/blob/ecaa784/src/couples.ts#L3)
