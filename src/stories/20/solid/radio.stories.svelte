<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import RadioSvelte from '../../../lib/20/solid/radio.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: RadioSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="Radio" />
