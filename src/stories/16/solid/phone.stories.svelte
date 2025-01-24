<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PhoneSvelte from '../../../lib/16/solid/phone.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: PhoneSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="Phone" />
