import type { Meta, StoryObj } from '@storybook/svelte'
import LanguageSvelte from '../../../lib/24/outline/language.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: LanguageSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<LanguageSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Language: Story = {}
