<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import RadioSvelte from '../../../lib/24/outline/radio.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: RadioSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Radio" />
