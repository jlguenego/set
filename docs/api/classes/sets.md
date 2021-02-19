[@jlguenego/set](../README.md) / [Exports](../modules.md) / Sets

# Class: Sets

## Table of contents

### Constructors

- [constructor](sets.md#constructor)

### Properties

- [areDisjoint](sets.md#aredisjoint)
- [cartesianProduct](sets.md#cartesianproduct)
- [includes](sets.md#includes)
- [intersection](sets.md#intersection)
- [powerSet](sets.md#powerset)

### Methods

- [absorb](sets.md#absorb)
- [areEquals](sets.md#areequals)
- [difference](sets.md#difference)
- [properlyInclude](sets.md#properlyinclude)
- [union](sets.md#union)

## Constructors

### constructor

\+ **new Sets**(): [*Sets*](sets.md)

**Returns:** [*Sets*](sets.md)

## Properties

### areDisjoint

▪ `Static` **areDisjoint**: <T\>(`firstSet`: *Set*<T\>, ...`otherSets`: *Set*<T\>[]) => *boolean*

#### Type declaration:

▸ <T\>(`firstSet`: *Set*<T\>, ...`otherSets`: *Set*<T\>[]): *boolean*

Test if all sets are disjoint.
If 2 sets have not empty intersection, then return false.

**`memberof`** Sets

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`firstSet` | *Set*<T\> |
`...otherSets` | *Set*<T\>[] |

**Returns:** *boolean*

Defined in: [sets/areDisjoint.ts:12](https://github.com/jlguenego/set/blob/ecaa784/src/sets/areDisjoint.ts#L12)

Defined in: [sets/Sets.ts:87](https://github.com/jlguenego/set/blob/ecaa784/src/sets/Sets.ts#L87)

___

### cartesianProduct

▪ `Static` **cartesianProduct**: <T, U\>(`e`: *Set*<T\>, `f`: *Set*<U\>) => *Set*<[T, U]\>

#### Type declaration:

▸ <T, U\>(`e`: *Set*<T\>, `f`: *Set*<U\>): *Set*<[T, U]\>

Builds the cartesian product of e and f.
E X F = {(a,b)|a∊E, b∊F}

#### Type parameters:

Name |
:------ |
`T` |
`U` |

#### Parameters:

Name | Type |
:------ | :------ |
`e` | *Set*<T\> |
`f` | *Set*<U\> |

**Returns:** *Set*<[T, U]\>

Defined in: [sets/cartesianProduct.ts:11](https://github.com/jlguenego/set/blob/ecaa784/src/sets/cartesianProduct.ts#L11)

Defined in: [sets/Sets.ts:91](https://github.com/jlguenego/set/blob/ecaa784/src/sets/Sets.ts#L91)

___

### includes

▪ `Static` **includes**: <T\>(`a`: *Set*<T\>, `b`: *Set*<T\>) => *boolean*

#### Type declaration:

▸ <T\>(`a`: *Set*<T\>, `b`: *Set*<T\>): *boolean*

test if a ⊂ b

**`static`** 

**`memberof`** Sets

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`a` | *Set*<T\> |
`b` | *Set*<T\> |

**Returns:** *boolean*

Defined in: [sets/includes.ts:11](https://github.com/jlguenego/set/blob/ecaa784/src/sets/includes.ts#L11)

Defined in: [sets/Sets.ts:81](https://github.com/jlguenego/set/blob/ecaa784/src/sets/Sets.ts#L81)

___

### intersection

▪ `Static` **intersection**: <T\>(...`sets`: *Set*<T\>[]) => *Set*<T\>

#### Type declaration:

▸ <T\>(...`sets`: *Set*<T\>[]): *Set*<T\>

Builds a new set = a ∩ b

**`static`** 

**`memberof`** Sets

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`...sets` | *Set*<T\>[] |

**Returns:** *Set*<T\>

Defined in: [sets/intersection.ts:10](https://github.com/jlguenego/set/blob/ecaa784/src/sets/intersection.ts#L10)

Defined in: [sets/Sets.ts:39](https://github.com/jlguenego/set/blob/ecaa784/src/sets/Sets.ts#L39)

___

### powerSet

▪ `Static` **powerSet**: <T\>(`set`: *Set*<T\>) => *Set*<Set<T\>\>

#### Type declaration:

▸ <T\>(`set`: *Set*<T\>): *Set*<Set<T\>\>

returns P(A): the powerset of A.
P(A) = {E|E⊂A}

**`memberof`** Sets

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`set` | *Set*<T\> |

**Returns:** *Set*<Set<T\>\>

Defined in: [sets/powerSet.ts:10](https://github.com/jlguenego/set/blob/ecaa784/src/sets/powerSet.ts#L10)

Defined in: [sets/Sets.ts:89](https://github.com/jlguenego/set/blob/ecaa784/src/sets/Sets.ts#L89)

## Methods

### absorb

▸ `Static`**absorb**<T\>(`target`: *Set*<T\>, `source`: *Set*<T\>): *void*

add all elements of source to target

**`static`** 

**`memberof`** Sets

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`target` | *Set*<T\> |
`source` | *Set*<T\> |

**Returns:** *void*

Defined in: [sets/Sets.ts:17](https://github.com/jlguenego/set/blob/ecaa784/src/sets/Sets.ts#L17)

___

### areEquals

▸ `Static`**areEquals**<T\>(`a`: *Set*<T\>, `b`: *Set*<T\>): *boolean*

Tests if a = b (a ⊂ b and b ⊂ a)

**`static`** 

**`memberof`** Sets

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`a` | *Set*<T\> |
`b` | *Set*<T\> |

**Returns:** *boolean*

Defined in: [sets/Sets.ts:74](https://github.com/jlguenego/set/blob/ecaa784/src/sets/Sets.ts#L74)

___

### difference

▸ `Static`**difference**<T\>(`a`: *Set*<T\>, `b`: *Set*<T\>): *Set*<T\>

Build a - b.

a - b is a set that contains all elements of a that are not elements of b.
a - b = {x∊a|x∉b}

**`static`** 

**`memberof`** Sets

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`a` | *Set*<T\> |
`b` | *Set*<T\> |

**Returns:** *Set*<T\>

Defined in: [sets/Sets.ts:54](https://github.com/jlguenego/set/blob/ecaa784/src/sets/Sets.ts#L54)

___

### properlyInclude

▸ `Static`**properlyInclude**<T\>(`a`: *Set*<T\>, `b`: *Set*<T\>): *boolean*

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`a` | *Set*<T\> |
`b` | *Set*<T\> |

**Returns:** *boolean*

Defined in: [sets/Sets.ts:83](https://github.com/jlguenego/set/blob/ecaa784/src/sets/Sets.ts#L83)

___

### union

▸ `Static`**union**<T\>(...`sets`: *Set*<T\>[]): *Set*<T\>

Builds a new set = a ∪ b

**`static`** 

**`memberof`** Sets

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`...sets` | *Set*<T\>[] |

**Returns:** *Set*<T\>

Defined in: [sets/Sets.ts:31](https://github.com/jlguenego/set/blob/ecaa784/src/sets/Sets.ts#L31)
