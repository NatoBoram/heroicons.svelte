import type { Meta, StoryObj } from '@storybook/svelte'
import LifebuoySvelte from '../../../lib/20/solid/lifebuoy.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: LifebuoySvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<LifebuoySvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Lifebuoy: Story = {}
