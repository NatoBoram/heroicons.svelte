import type { Meta, StoryObj } from '@storybook/svelte'
import FaceFrownSvelte from '../../../lib/20/solid/face-frown.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: FaceFrownSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<FaceFrownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const FaceFrown: Story = {}
