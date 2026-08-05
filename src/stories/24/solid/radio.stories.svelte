<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import RadioSvelte from '../../../lib/24/solid/radio.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: RadioSvelte,
		args: { class: '' },
	})
</script>

<Story name="Radio" />
