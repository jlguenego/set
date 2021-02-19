[@jlguenego/set](../README.md) / [Exports](../modules.md) / Relation

# Class: Relation<T, U\>

## Type parameters

Name |
:------ |
`T` |
`U` |

## Hierarchy

* **Relation**

  ↳ [*RelationOn*](relationon.md)

## Table of contents

### Constructors

- [constructor](relation.md#constructor)

### Properties

- [spec](relation.md#spec)

### Methods

- [getInverse](relation.md#getinverse)
- [getSet](relation.md#getset)
- [isMapping](relation.md#ismapping)
- [test](relation.md#test)
- [fromCartesianSet](relation.md#fromcartesianset)

## Constructors

### constructor

\+ **new Relation**<T, U\>(`spec`: [*RelationSpec*](../modules.md#relationspec)<T, U\>): [*Relation*](relation.md)<T, U\>

#### Type parameters:

Name |
:------ |
`T` |
`U` |

#### Parameters:

Name | Type |
:------ | :------ |
`spec` | [*RelationSpec*](../modules.md#relationspec)<T, U\> |

**Returns:** [*Relation*](relation.md)<T, U\>

Defined in: [relations/Relation.ts:18](https://github.com/jlguenego/set/blob/ecaa784/src/relations/Relation.ts#L18)

## Properties

### spec

• **spec**: [*RelationSpec*](../modules.md#relationspec)<T, U\>

## Methods

### getInverse

▸ **getInverse**(): [*Relation*](relation.md)<U, T\>

Get the inverse relation.
{(b,a)|(a,b) ∊ R}

**`memberof`** Relation

**Returns:** [*Relation*](relation.md)<U, T\>

Defined in: [relations/Relation.ts:41](https://github.com/jlguenego/set/blob/ecaa784/src/relations/Relation.ts#L41)

___

### getSet

▸ **getSet**(`domain`: *Set*<T\>, `range`: *Set*<U\>): *Set*<[*OrderedPair*](orderedpair.md)<T, U\>\>

Get the cartesian product set defining the relation, from a domain set and a range set.

**`memberof`** Relation

#### Parameters:

Name | Type |
:------ | :------ |
`domain` | *Set*<T\> |
`range` | *Set*<U\> |

**Returns:** *Set*<[*OrderedPair*](orderedpair.md)<T, U\>\>

Defined in: [relations/Relation.ts:54](https://github.com/jlguenego/set/blob/ecaa784/src/relations/Relation.ts#L54)

___

### isMapping

▸ **isMapping**(`domain`: *Set*<T\>, `range`: *Set*<U\>): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`domain` | *Set*<T\> |
`range` | *Set*<U\> |

**Returns:** *boolean*

Defined in: [relations/Relation.ts:66](https://github.com/jlguenego/set/blob/ecaa784/src/relations/Relation.ts#L66)

___

### test

▸ **test**(`a`: T, `b`: U): *boolean*

Run the relation to see if it is true or false.

**`memberof`** Relation

#### Parameters:

Name | Type |
:------ | :------ |
`a` | T |
`b` | U |

**Returns:** *boolean*

Defined in: [relations/Relation.ts:30](https://github.com/jlguenego/set/blob/ecaa784/src/relations/Relation.ts#L30)

___

### fromCartesianSet

▸ `Static`**fromCartesianSet**<T, U\>(`set`: *Set*<[*OrderedPair*](orderedpair.md)<T, U\>\>): [*Relation*](relation.md)<T, U\>

From a cartesian product set, get the relation object.

**`static`** 

**`memberof`** Relation

#### Type parameters:

Name |
:------ |
`T` |
`U` |

#### Parameters:

Name | Type |
:------ | :------ |
`set` | *Set*<[*OrderedPair*](orderedpair.md)<T, U\>\> |

**Returns:** [*Relation*](relation.md)<T, U\>

Defined in: [relations/Relation.ts:16](https://github.com/jlguenego/set/blob/ecaa784/src/relations/Relation.ts#L16)
