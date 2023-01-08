import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowDownTray as ArrowDownTraySvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: ArrowDownTraySvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ArrowDownTraySvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowDownTray: Story = {}
