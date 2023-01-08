import type { Meta, StoryObj } from '@storybook/svelte'
import { BuildingStorefront as BuildingStorefrontSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: BuildingStorefrontSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<BuildingStorefrontSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BuildingStorefront: Story = {}
