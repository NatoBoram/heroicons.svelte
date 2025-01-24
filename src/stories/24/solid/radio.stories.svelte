<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import RadioSvelte from '../../../lib/24/solid/radio.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: RadioSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Radio" />
