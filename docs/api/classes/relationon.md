[@jlguenego/set](../README.md) / [Exports](../modules.md) / RelationOn

# Class: RelationOn<T\>

## Type parameters

Name |
:------ |
`T` |

## Hierarchy

* [*Relation*](relation.md)<T, T\>

  ↳ **RelationOn**

## Table of contents

### Constructors

- [constructor](relationon.md#constructor)

### Properties

- [spec](relationon.md#spec)

### Methods

- [getInverse](relationon.md#getinverse)
- [getSet](relationon.md#getset)
- [isAntiSymmetric](relationon.md#isantisymmetric)
- [isAsymmetric](relationon.md#isasymmetric)
- [isEquivalence](relationon.md#isequivalence)
- [isIrreflexive](relationon.md#isirreflexive)
- [isLinearOrder](relationon.md#islinearorder)
- [isMapping](relationon.md#ismapping)
- [isPartialOrder](relationon.md#ispartialorder)
- [isReflexive](relationon.md#isreflexive)
- [isReflexiveLinearOrder](relationon.md#isreflexivelinearorder)
- [isReflexivePartialOrder](relationon.md#isreflexivepartialorder)
- [isSymmetric](relationon.md#issymmetric)
- [isTransitive](relationon.md#istransitive)
- [test](relationon.md#test)
- [fromCartesianSet](relationon.md#fromcartesianset)
- [fromSet](relationon.md#fromset)

## Constructors

### constructor

\+ **new RelationOn**<T\>(`spec`: [*RelationSpec*](../modules.md#relationspec)<T, T\>): [*RelationOn*](relationon.md)<T\>

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`spec` | [*RelationSpec*](../modules.md#relationspec)<T, T\> |

**Returns:** [*RelationOn*](relationon.md)<T\>

Inherited from: [Relation](relation.md)

Defined in: [relations/Relation.ts:18](https://github.com/jlguenego/set/blob/ecaa784/src/relations/Relation.ts#L18)

## Properties

### spec

• **spec**: [*RelationSpec*](../modules.md#relationspec)<T, T\>

Inherited from: [Relation](relation.md).[spec](relation.md#spec)

## Methods

### getInverse

▸ **getInverse**(): [*Relation*](relation.md)<T, T\>

Get the inverse relation.
{(b,a)|(a,b) ∊ R}

**`memberof`** Relation

**Returns:** [*Relation*](relation.md)<T, T\>

Inherited from: [Relation](relation.md)

Defined in: [relations/Relation.ts:41](https://github.com/jlguenego/set/blob/ecaa784/src/relations/Relation.ts#L41)

___

### getSet

▸ **getSet**(`domain`: *Set*<T\>): *Set*<[*OrderedPair*](orderedpair.md)<T, T\>\>

Returns the set defining the relation.

**`memberof`** RelationOn

#### Parameters:

Name | Type |
:------ | :------ |
`domain` | *Set*<T\> |

**Returns:** *Set*<[*OrderedPair*](orderedpair.md)<T, T\>\>

Overrides: [Relation](relation.md)

Defined in: [relations/RelationOn.ts:16](https://github.com/jlguenego/set/blob/ecaa784/src/relations/RelationOn.ts#L16)

___

### isAntiSymmetric

▸ **isAntiSymmetric**(`domain`: *Set*<T\>): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`domain` | *Set*<T\> |

**Returns:** *boolean*

Defined in: [relations/RelationOn.ts:60](https://github.com/jlguenego/set/blob/ecaa784/src/relations/RelationOn.ts#L60)

___

### isAsymmetric

▸ **isAsymmetric**(`domain`: *Set*<T\>): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`domain` | *Set*<T\> |

**Returns:** *boolean*

Defined in: [relations/RelationOn.ts:49](https://github.com/jlguenego/set/blob/ecaa784/src/relations/RelationOn.ts#L49)

___

### isEquivalence

▸ **isEquivalence**(`domain`: *Set*<T\>): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`domain` | *Set*<T\> |

**Returns:** *boolean*

Defined in: [relations/RelationOn.ts:87](https://github.com/jlguenego/set/blob/ecaa784/src/relations/RelationOn.ts#L87)

___

### isIrreflexive

▸ **isIrreflexive**(`domain`: *Set*<T\>): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`domain` | *Set*<T\> |

**Returns:** *boolean*

Defined in: [relations/RelationOn.ts:29](https://github.com/jlguenego/set/blob/ecaa784/src/relations/RelationOn.ts#L29)

___

### isLinearOrder

▸ **isLinearOrder**(`domain`: *Set*<T\>): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`domain` | *Set*<T\> |

**Returns:** *boolean*

Defined in: [relations/RelationOn.ts:107](https://github.com/jlguenego/set/blob/ecaa784/src/relations/RelationOn.ts#L107)

___

### isMapping

▸ **isMapping**(`domain`: *Set*<T\>, `range`: *Set*<T\>): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`domain` | *Set*<T\> |
`range` | *Set*<T\> |

**Returns:** *boolean*

Inherited from: [Relation](relation.md)

Defined in: [relations/Relation.ts:66](https://github.com/jlguenego/set/blob/ecaa784/src/relations/Relation.ts#L66)

___

### isPartialOrder

▸ **isPartialOrder**(`domain`: *Set*<T\>): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`domain` | *Set*<T\> |

**Returns:** *boolean*

Defined in: [relations/RelationOn.ts:95](https://github.com/jlguenego/set/blob/ecaa784/src/relations/RelationOn.ts#L95)

___

### isReflexive

▸ **isReflexive**(`domain`: *Set*<T\>): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`domain` | *Set*<T\> |

**Returns:** *boolean*

Defined in: [relations/RelationOn.ts:20](https://github.com/jlguenego/set/blob/ecaa784/src/relations/RelationOn.ts#L20)

___

### isReflexiveLinearOrder

▸ **isReflexiveLinearOrder**(`domain`: *Set*<T\>): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`domain` | *Set*<T\> |

**Returns:** *boolean*

Defined in: [relations/RelationOn.ts:122](https://github.com/jlguenego/set/blob/ecaa784/src/relations/RelationOn.ts#L122)

___

### isReflexivePartialOrder

▸ **isReflexivePartialOrder**(`domain`: *Set*<T\>): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`domain` | *Set*<T\> |

**Returns:** *boolean*

Defined in: [relations/RelationOn.ts:99](https://github.com/jlguenego/set/blob/ecaa784/src/relations/RelationOn.ts#L99)

___

### isSymmetric

▸ **isSymmetric**(`domain`: *Set*<T\>): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`domain` | *Set*<T\> |

**Returns:** *boolean*

Defined in: [relations/RelationOn.ts:38](https://github.com/jlguenego/set/blob/ecaa784/src/relations/RelationOn.ts#L38)

___

### isTransitive

▸ **isTransitive**(`domain`: *Set*<T\>): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`domain` | *Set*<T\> |

**Returns:** *boolean*

Defined in: [relations/RelationOn.ts:72](https://github.com/jlguenego/set/blob/ecaa784/src/relations/RelationOn.ts#L72)

___

### test

▸ **test**(`a`: T, `b`: T): *boolean*

Run the relation to see if it is true or false.

**`memberof`** Relation

#### Parameters:

Name | Type |
:------ | :------ |
`a` | T |
`b` | T |

**Returns:** *boolean*

Inherited from: [Relation](relation.md)

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

Inherited from: [Relation](relation.md)

Defined in: [relations/Relation.ts:16](https://github.com/jlguenego/set/blob/ecaa784/src/relations/Relation.ts#L16)

___

### fromSet

▸ `Static`**fromSet**<T\>(`set`: *Set*<[*OrderedPair*](orderedpair.md)<T, T\>\>): [*RelationOn*](relationon.md)<T\>

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`set` | *Set*<[*OrderedPair*](orderedpair.md)<T, T\>\> |

**Returns:** [*RelationOn*](relationon.md)<T\>

Defined in: [relations/RelationOn.ts:5](https://github.com/jlguenego/set/blob/ecaa784/src/relations/RelationOn.ts#L5)
