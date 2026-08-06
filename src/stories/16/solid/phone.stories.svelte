<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PhoneSvelte from '../../../lib/16/solid/phone.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: PhoneSvelte,
		args: { class: '' },
	})
</script>

<Story name="Phone" />
