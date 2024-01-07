import type { Meta, StoryObj } from '@storybook/svelte'
import LifebuoySvelte from '../../../lib/16/solid/lifebuoy.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: LifebuoySvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<LifebuoySvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Lifebuoy: Story = {}
