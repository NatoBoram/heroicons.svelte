<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import RadioSvelte from '../../../lib/16/solid/radio.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: RadioSvelte,
		args: { class: '' },
	})
</script>

<Story name="Radio" />
