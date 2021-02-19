[@jlguenego/set](../README.md) / [Exports](../modules.md) / EquivalenceRelation

# Class: EquivalenceRelation<T\>

## Type parameters

Name |
:------ |
`T` |

## Table of contents

### Constructors

- [constructor](equivalencerelation.md#constructor)

### Properties

- [domain](equivalencerelation.md#domain)
- [r](equivalencerelation.md#r)

### Methods

- [getEquivalenceClasses](equivalencerelation.md#getequivalenceclasses)
- [getEquivalenceIndex](equivalencerelation.md#getequivalenceindex)

## Constructors

### constructor

\+ **new EquivalenceRelation**<T\>(`r`: [*RelationOn*](relationon.md)<T\>, `domain`: *Set*<T\>): [*EquivalenceRelation*](equivalencerelation.md)<T\>

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`r` | [*RelationOn*](relationon.md)<T\> |
`domain` | *Set*<T\> |

**Returns:** [*EquivalenceRelation*](equivalencerelation.md)<T\>

Defined in: [relations/EquivalenceRelation.ts:2](https://github.com/jlguenego/set/blob/ecaa784/src/relations/EquivalenceRelation.ts#L2)

## Properties

### domain

• **domain**: *Set*<T\>

___

### r

• **r**: [*RelationOn*](relationon.md)<T\>

## Methods

### getEquivalenceClasses

▸ **getEquivalenceClasses**(`domain`: *Set*<T\>): *Set*<Set<T\>\>

#### Parameters:

Name | Type |
:------ | :------ |
`domain` | *Set*<T\> |

**Returns:** *Set*<Set<T\>\>

Defined in: [relations/EquivalenceRelation.ts:11](https://github.com/jlguenego/set/blob/ecaa784/src/relations/EquivalenceRelation.ts#L11)

___

### getEquivalenceIndex

▸ **getEquivalenceIndex**(`domain`: *Set*<T\>): *number*

#### Parameters:

Name | Type |
:------ | :------ |
`domain` | *Set*<T\> |

**Returns:** *number*

Defined in: [relations/EquivalenceRelation.ts:33](https://github.com/jlguenego/set/blob/ecaa784/src/relations/EquivalenceRelation.ts#L33)
