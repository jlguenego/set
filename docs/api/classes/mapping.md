[@jlguenego/set](../README.md) / [Exports](../modules.md) / Mapping

# Class: Mapping<T, U\>

## Type parameters

Name |
:------ |
`T` |
`U` |

## Table of contents

### Constructors

- [constructor](mapping.md#constructor)

### Properties

- [domain](mapping.md#domain)
- [r](mapping.md#r)
- [range](mapping.md#range)

### Methods

- [get](mapping.md#get)
- [getInverse](mapping.md#getinverse)
- [isBijection](mapping.md#isbijection)
- [isDefined](mapping.md#isdefined)
- [isInjection](mapping.md#isinjection)
- [isPartial](mapping.md#ispartial)
- [isSurjection](mapping.md#issurjection)
- [isTotal](mapping.md#istotal)

## Constructors

### constructor

\+ **new Mapping**<T, U\>(`r`: [*Relation*](relation.md)<T, U\>, `domain`: *Set*<T\>, `range`: *Set*<U\>): [*Mapping*](mapping.md)<T, U\>

#### Type parameters:

Name |
:------ |
`T` |
`U` |

#### Parameters:

Name | Type |
:------ | :------ |
`r` | [*Relation*](relation.md)<T, U\> |
`domain` | *Set*<T\> |
`range` | *Set*<U\> |

**Returns:** [*Mapping*](mapping.md)<T, U\>

Defined in: [relations/Mapping.ts:3](https://github.com/jlguenego/set/blob/ecaa784/src/relations/Mapping.ts#L3)

## Properties

### domain

• **domain**: *Set*<T\>

___

### r

• **r**: [*Relation*](relation.md)<T, U\>

___

### range

• **range**: *Set*<U\>

## Methods

### get

▸ **get**(`a`: T): *undefined* \| U

#### Parameters:

Name | Type |
:------ | :------ |
`a` | T |

**Returns:** *undefined* \| U

Defined in: [relations/Mapping.ts:14](https://github.com/jlguenego/set/blob/ecaa784/src/relations/Mapping.ts#L14)

___

### getInverse

▸ **getInverse**(): [*Mapping*](mapping.md)<U, T\>

**Returns:** [*Mapping*](mapping.md)<U, T\>

Defined in: [relations/Mapping.ts:79](https://github.com/jlguenego/set/blob/ecaa784/src/relations/Mapping.ts#L79)

___

### isBijection

▸ **isBijection**(): *boolean*

**Returns:** *boolean*

Defined in: [relations/Mapping.ts:75](https://github.com/jlguenego/set/blob/ecaa784/src/relations/Mapping.ts#L75)

___

### isDefined

▸ **isDefined**(`a`: T): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`a` | T |

**Returns:** *boolean*

Defined in: [relations/Mapping.ts:23](https://github.com/jlguenego/set/blob/ecaa784/src/relations/Mapping.ts#L23)

___

### isInjection

▸ **isInjection**(): *boolean*

**Returns:** *boolean*

Defined in: [relations/Mapping.ts:44](https://github.com/jlguenego/set/blob/ecaa784/src/relations/Mapping.ts#L44)

___

### isPartial

▸ **isPartial**(): *boolean*

**Returns:** *boolean*

Defined in: [relations/Mapping.ts:40](https://github.com/jlguenego/set/blob/ecaa784/src/relations/Mapping.ts#L40)

___

### isSurjection

▸ **isSurjection**(): *boolean*

**Returns:** *boolean*

Defined in: [relations/Mapping.ts:59](https://github.com/jlguenego/set/blob/ecaa784/src/relations/Mapping.ts#L59)

___

### isTotal

▸ **isTotal**(): *boolean*

**Returns:** *boolean*

Defined in: [relations/Mapping.ts:32](https://github.com/jlguenego/set/blob/ecaa784/src/relations/Mapping.ts#L32)
