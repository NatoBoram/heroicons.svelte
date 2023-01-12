import type { Meta, StoryObj } from '@storybook/svelte'
import { Wrench as WrenchSvelte } from '../../../lib/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: WrenchSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<WrenchSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Wrench: Story = {}
